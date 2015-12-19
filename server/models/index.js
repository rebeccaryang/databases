var db = require('../db');

module.exports = {
  messages: {
    get: function (req,res) {
      db.getAllSql(req,res);
    }, // a function which produces all the messages
    post: function (req,res) {
      db.postMsgSql(req,res);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res) {
      console.log('post user in models');
      db.postUsrSql(req, res);
    }
  }
};

// get request will use the db.connect()
// db.addrow(stuff)
// db.getrow(stuff)

// get: function(req, res) {
//   db.postSql(req, res);
// }