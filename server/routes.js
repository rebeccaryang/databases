var controllers = require('./controllers');
var router = require('express').Router();
for (var route in controllers) {
  console.log('arrived in routes.js');
  // route is a key in controllers, which are messages and users
  router.route("/" + route) // either /messages or /users
    .get(controllers[route].get) // controllers[messages].get is a function
    .post(controllers[route].post); // controllers[users].post handles the actual post req
}

module.exports = router;

// app.get(url, callback)
// router.route().get(cb)