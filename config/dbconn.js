let mysql = require('mysql');

function dbconn(){
	if(!process.env.NODE_ENV){
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
			host: 'remotemysql.com',
			user: 'uSANkH0aYN',
			password : 'gOmWfFmBTa',
			database: 'uSANkH0aYN',
			dateStrings : true,
			multipleStatements: true
		});
	}

}

module.exports = dbconn;
