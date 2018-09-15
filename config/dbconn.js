var mysql = require('mysql');

var dbconn = function(){
		return conn = mysql.createConnection({
		host: 'cbsede.dyndns.org:20000',
		user: 'mqtt',
		password : 'mqtt_server_01#',
		database: 'mqtt'});
}


module.exports = function(){
	return dbconn;
}
