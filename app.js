const Express = require("express")
const PORT = process.env.PORT || 5000
const Router = require("./routes")
const path = require("path")
const BodyParser = require("body-parser")
const cluster = require('cluster');
const cCPUs = require('os').cpus().length;
const cors = require("cors")


if (cluster.isMaster) {
    // Create a worker for each CPU
    for (let i = 0; i < cCPUs; i++) {
        cluster.fork();
    }
    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online.');
    });
    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died.');
    });
} else {
    var app = Express()
    app.use(Express.static(path.resolve(__dirname + "/public")))
    app.use(BodyParser.json())
    app.use(cors())
    app.use(Router)
    app.listen(PORT, function () {
        console.log("Server is listening on...", PORT)
        require("./db/connection")
    })
}





