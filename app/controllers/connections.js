module.exports.conn_mgmt_insert = function(app, user_id, client_id, client_address, client_port, db_device_id){
	let conn = app.config.dbconn();
	let connMgmt = new app.app.models.connectionsDAO(conn);

	return new Promise((resolve, reject)=>{
		connMgmt.conn_db_insert(user_id, client_id, client_address, client_port, db_device_id, function(err, result){
			if(!err){
				console.log("conn_db_insert");
				app.app.controllers.connections.db_end_connection(conn);
				resolve(result);
			}else{
				if(err){
					app.app.controllers.connections.db_end_connection(conn);
					reject(err);
				}

				if(result){
					app.app.controllers.connections.db_end_connection(conn);
					console.log("result",result);
					resolve(result);
				}
			}
		})
	});

};

module.exports.conn_mgmt_delete = function(app, user_id, client_id, client_address, client_port, db_device_id){
	let conn = app.config.dbconn();
	let connMgmt = new app.app.models.connectionsDAO(conn);

	connMgmt.conn_db_delete(user_id, client_id, client_address, client_port, function(err, result){
		if(!err){
			app.app.controllers.connections.db_end_connection(conn);
		}else{
			if(err){
				app.app.controllers.connections.db_end_connection(conn);
				console.log("err",err);
			}

			if(result){
				app.app.controllers.connections.db_end_connection(conn);
				console.log("result",result);
			}
		}
	})
};


module.exports.conn_mgmt_delete_all = function(app){
	let conn = app.config.dbconn();
	let connMgmt = new app.app.models.connectionsDAO(conn);

	connMgmt.conn_db_delete_all(null, function(err, result){
		if(!err){
			console.log("conn_db_delete_all");
			app.app.controllers.connections.db_end_connection(conn);
		}else{
			if(err){
				app.app.controllers.connections.db_end_connection(conn);
				console.log("erro:",err);
			}

			if(result){
				app.app.controllers.connections.db_end_connection(conn);
				console.log("result",result);
			}
		}
	})
};

module.exports.db_end_connection = function(conn){

	conn.end(function(err){
		if(err){
			console.log("err_conn:",err);
		}
	})
};