module.exports.conn_mgmt_insert = function(app, user_id, client_id, client_address, client_port){
	var conn = app.config.dbconn();
	var connMgmt = new app.app.models.connectionsDAO(conn)

	connMgmt.conn_db_insert(user_id, client_id, client_address, client_port, function(err, result){
		if(!err && result.affectedRows > 0){
			return
		}else{
			if(err){
				console.log(err)
			}

			if(result){
				console.log(result)
			}
		}
	})
}

module.exports.conn_mgmt_delete = function(app, user_id, client_id, client_address, client_port){
	var conn = app.config.dbconn();
	var connMgmt = new app.app.models.connectionsDAO(conn)

	connMgmt.conn_db_delete(user_id, client_id, client_address, client_port, function(err, result){
		if(!err && result.affectedRows > 0){
			return
		}else{
			if(err){
				console.log(err)
			}

			if(result){
				console.log(result)
			}
		}
	})
}