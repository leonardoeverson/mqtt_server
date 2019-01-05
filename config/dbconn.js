let mysql = require('mysql');


function dbconn(){

	return conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password : 'db_node_01#',
		database: 'mqtt'
	});

}

module.exports = function(){
	return dbconn;
};
