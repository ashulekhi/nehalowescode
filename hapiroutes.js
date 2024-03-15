const UserController = require('./controllers/user.controller');
const MobileController = require('./controllers/mobile.controller');

const routes = [
  // User routes
  {
    method: 'GET',
    path: '/allusers',
    handler: UserController.allUsers
  },
  {
    method: 'POST',
    path: '/registeruser',
    handler: UserController.createUser
  },
  {
    method: 'DELETE',
    path: '/deleteaccount',
    handler: UserController.deleteAccount
  },
  // Mobile routes
  {
    method: 'GET',
    path: '/allmobiles',
    handler: MobileController.getAllMobiles
  },
  {
    method: 'POST',
    path: '/addnewmobile',
    handler: MobileController.addMobile
  },
];

module.exports = routes;
