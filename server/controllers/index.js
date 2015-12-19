var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
    	console.log('posting messages');
    	models.messages.post(req,res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
    	console.log('posting users in controllers');
    	// console.log(models.users.post);
    	models.users.post(req,res);
    }
  }
};

// function get(req, res) {
// 	models.messages.get(req, res);
// }