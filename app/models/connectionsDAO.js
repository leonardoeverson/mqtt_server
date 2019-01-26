function connectionsDAO(conn){
	this.conn = conn
}

connectionsDAO.prototype.conn_db_insert = function(user_id, client_id, client_address, client_port, device_id, callback) {
	let dados = {};
	dados.user_id = user_id;
	dados.client_id = client_id;
	dados.client_address = client_address;
	dados.client_port = client_port;
	dados.device_id = device_id;

	conn.beginTransaction(function(err) {
		if (err) {
			callback(err, null);
		}
		conn.query("insert into conn_clients(user_id, client_id, client_address, client_port, device_id) values(?)", [dados], function(err, result) {
			if (err) {
				conn.rollback(function() {
					callback(err, null);
				});
			}
			conn.query("insert into conn_log(user_id, client_id, client_address, client_port) values(?, ?, ?, ?)",[dados.user_id, dados.client_id, dados.client_address, dados.client_port], function(err, result) {
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
	var query = "delete from conn_clients where user_id = ? and client_id  = ? and client_address = ? and client_port = ?";
	this.conn.query(query, [dados.user_id, dados.client_id, dados.client_address, dados.client_port], callback);
};

connectionsDAO.prototype.conn_db_delete_all = function(arg, callback) {
	var query = "delete from conn_clients";
	this.conn.query(query, callback);
};

connectionsDAO.prototype.connected_device_user = function(user_id, callback) {
	var query = "select * from conn_clients where user_id = ?";
	this.conn.query(query, [user_id], callback);
};


module.exports = function(){
	return connectionsDAO;
};