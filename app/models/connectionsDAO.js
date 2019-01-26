function connectionsDAO(conn){
	this.connection = conn
}

connectionsDAO.prototype.conn_db_insert = function(user_id, client_id, client_address, client_port, device_id, callback) {

	conn.beginTransaction(function(err) {
		if (err) {
			callback(err, null);
		}
		conn.query("insert into conn_clients(user_id, client_id, client_address, client_port, device_id) values('"+user_id+"','"+client_id+"','"+client_address+
			"',"+client_port+","+device_id+")", function(err, result) {
			if (err) {
				conn.rollback(function() {
					callback(err, null);
				});
			}
			conn.query("insert into conn_log(user_id, client_id, client_address, client_port) values('"+user_id+"','"+client_id+"','"+client_address+
			"',"+client_port+")", function(err, result) {
				if (err) {
					conn.rollback(function() {
						callback(err, null);
					});
				}
				conn.commit(function(err) {
					if (err) {
						conn.rollback(function() {
							callback(err, result);
						});
					}

					callback(null, result);

				});
			});
		});
	});
};

connectionsDAO.prototype.conn_db_delete = function(user_id, client_id, client_address, client_port, callback) {
	var query = "delete from conn_clients where user_id = "+user_id+" and client_id  = '"+client_id+"' and client_address = '"+client_address+"' and client_port = "+client_port;
	this.connection.query(query, callback);
};

connectionsDAO.prototype.conn_db_delete_all = function(arg, callback) {
	var query = "delete from conn_clients";
	this.connection.query(query, callback);
};

connectionsDAO.prototype.connected_device_user = function(user_id, callback) {
	var query = "select * from conn_clients where user_id = " + user_id;
	this.connection.query(query, callback);
};


module.exports = function(){
	return connectionsDAO;
};