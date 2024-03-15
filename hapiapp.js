const Hapi = require('@hapi/hapi');
 require('./db/connection');
const allRoutes = require("./hapiroutes")

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: 'localhost',
        routes: {
            cors:true,
            payload: {
                parse: true, // Enable payload parsing for all routes
                allow: 'application/json', // Allow JSON payloads only
            }
        }
    });


    
    // Add routes to the server
    server.route(allRoutes);

    // Root route
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    // Start the server
    await server.start();
    console.log('Server running on', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
