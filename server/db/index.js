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

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

var connection = mysql.createConnection({
	user: 'root',
	database: 'chat',
	password: 'kar'
	// host: 'localhost'
	// do we need host:localhost??
});

exports.connection = connection;

connection.connect();

// var something = require(index.js)
// something.connection.connect();

// Something that pulls the last 100 messages
// db.query('select * from messages');
// Something that adds messages
var postUsrSql = function(req, res) {
	var username = req.body.username;

	connection.query("insert into users (name) values('" + username + "')",function(err,data){
		console.log(err);
		res.end();
	});
	// connection.end();
}

var postMsgSql = function(req,res){
	var username = JSON.stringify(req.body.username);
	// var q = connection.query('select * from users');
	// q.on('result', function(row) {console.log(row);});
	var text = req.body.message;
	var roomname = req.body.roomname;
	connection.query("insert into messages (username, text, room) values(" + username + ", " + JSON.stringify(text) + ", " + JSON.stringify(roomname) + ");",function(err,data){
		res.end();
	});
	// may need options and cb to be provided as the last 2 inputs to connection.query
	
}
// mysql.query('insert into messages (username, text, room)
// values ()

var getAllSql = function(req,res){
	connection.query('select * from messages',[], function(err,data){
		res.writeHead(201, headers);
		res.end(JSON.stringify({results:data}));
	});
	// connection.end();
}

exports.getAllSql = getAllSql;
exports.postMsgSql = postMsgSql;
exports.postUsrSql = postUsrSql;