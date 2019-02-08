module.exports.conn_mgmt_insert = function(app, user_id, client_id, client_address, client_port, db_device_id, method){
	let conn = app.config.dbconn();
	let connMgmt = new app.app.models.connectionsDAO(conn);

	let dados = {};
	dados.user_id = user_id;
	dados.client_id = client_id;
	dados.client_address = client_address;
	dados.client_port = client_port;
	dados.device_id = db_device_id;
	dados.method = method;

	return new Promise((resolve, reject)=>{
		connMgmt.conn_db_insert(dados, function(err, result, result_id){
			app.app.controllers.connections.db_end_connection(conn);
			if(!err){
				console.log("conn_db_insert");
				resolve(result_id);
			}else{
				if(err){
					reject(err);
				}

				if(result){
					console.log("result",result);
					resolve(result);
				}
			}
		})
	});

};

module.exports.conn_mgmt_delete = function(app, id_conn){
	let conn = app.config.dbconn();
	let connMgmt = new app.app.models.connectionsDAO(conn);

	connMgmt.conn_db_delete(id_conn, function(err, result){
		app.app.controllers.connections.db_end_connection(conn);
		if(!err){
			console.log('conn_db_delete');
		}else{
			if(err){
				console.log("err",err);
			}

			if(result){
				console.log("result",result);
			}
		}
	})
};


module.exports.conn_mgmt_delete_all = function(app){
	let conn = app.config.dbconn();
	let connMgmt = new app.app.models.connectionsDAO(conn);

	connMgmt.conn_db_delete_all(null, function(err, result){
		app.app.controllers.connections.db_end_connection(conn);
		if(!err){
			console.log("conn_db_delete_all");
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
			console.log("err_conn:",err);
		}
	})
};