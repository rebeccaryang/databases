var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'me',
//   password : 'secret',
//   database : 'my_db'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();

var connection = mysql.createConnection({
	user: 'root',
	database: 'chat'
	// do we need host:localhost??
});

exports.connection = connection;

// var something = require(index.js)
// something.connection.connect();

// Something that pulls the last 100 messages
// db.query('select * from messages');
// Something that adds messages
var postSql = function(req,res){
	var username = req.json.username;
	var text = req.json.text;
	var roomname = req.json.roomname;

	db.query("insert into messages (username, text, room) values(" + username 
		+ ", " + text + ", " + roomname + ")");
	// may need options and cb to be provided as the last 2 inputs to db.query
}
// db.query('insert into messages (username, text, room)
// values ()

var getAllSql = function(req,res){
	db.query('select * from messages', [], cb);
}

exports.getAllSql = getAllSql;
exports.postSql = postSql