let mysql = require('mysql');

function dbconn(){

	if(!process.env.MARIADB_SERVICE_HOST){
		return conn = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password : 'db_node_01#',
			database: 'mqtt',
			dateStrings : true,
			multipleStatements: true
		});
	}else{
		return conn = mysql.createConnection({
			host: 'mysql://'+process.env.MARIADB_SERVICE_HOST+':'+process.env.MARIADB_PORT_3306_TCP_PORT,
			user: 'userDAK',
			password : 'e75WNMWXP0JEkID5',
			database: 'sampledb',
			dateStrings : true,
			multipleStatements: true
		});
	}


}

module.exports = function(){
	return dbconn;
};
