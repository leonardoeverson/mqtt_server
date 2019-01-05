let mysql = require('mysql');

let dbconn = function(){
		return conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password : 'db_node_01#',
		database: 'mqtt'});
};

dbconn.end(function(err) {
	// The connection is terminated now
	dbconn.destroy();
});


module.exports = function(){
	return dbconn;
};
