module.exports.conn_mgmt_insert = function(app, user_id, client_id, client_address, client_port, db_device_id){
	let conn = app.config.dbconn();
	let connMgmt = new app.app.models.connectionsDAO(conn);

	connMgmt.conn_db_insert(user_id, client_id, client_address, client_port, db_device_id, function(err, result){
		if(!err && result.affectedRows > 0){
			try{
				console.log("conn_db_insert");
				app.app.controllers.connections.db_end_connection(conn);
			}catch(e){
				console.log(e);
			}
		}else{
			if(err){
				console.log("erro",err);
			}

			if(result){
				conn.end(function(err) {
					// The connection is terminated now
				});
				console.log("result",result);
			}
		}
	})
};

module.exports.conn_mgmt_delete = function(app, user_id, client_id, client_address, client_port, db_device_id){
	let conn = app.config.dbconn();
	let connMgmt = new app.app.models.connectionsDAO(conn);

	connMgmt.conn_db_delete(user_id, client_id, client_address, client_port, function(err, result){
		if(!err){
			try{
				console.log("conn_db_delete");
				app.app.controllers.connections.db_end_connection(conn);
			}catch(e){
				console.log(e);
			}
		}else{
			if(err){
				console.log("err",err)
			}

			if(result){
				console.log("result",result)
			}
		}
	})
};


module.exports.conn_mgmt_delete_all = function(app){
	let conn = app.config.dbconn();
	let connMgmt = new app.app.models.connectionsDAO(conn);

	connMgmt.conn_db_delete_all(null, function(err, result){
		if(!err){
			try{
				console.log("conn_db_delete_all");
				app.app.controllers.connections.db_end_connection(conn);
			}catch(e){
				console.log(e);
			}

		}else{
			if(err){
				console.log("erro:",err);
			}

			if(result){
				console.log("result",result);
			}
		}
	})
};

module.exports.db_end_connection = function(conn){

	conn.end(function(err){
		if(err){
			console.log(err);
		}
	})
};