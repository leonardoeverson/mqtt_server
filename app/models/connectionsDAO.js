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
		conn.query("insert into conn_clients(user_id, client_id, client_address, client_port, device_id) values(?, ?, ?, ?, ?)", [dados.user_id, dados.client_id, dados.client_address, dados.client_port, dados.device_id], function(err, result) {
			if (err) {
				conn.rollback(function() {
					callback(err, null);
				});
			}

			let result_id = result;
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

					callback(null, result, result_id);

				});
			});
		});
	});
};

connectionsDAO.prototype.conn_db_delete = function(id_conn, callback) {
	let query = "delete from conn_clients where id_conn = ?";
	this.conn.query(query, [id_conn], callback);
};

connectionsDAO.prototype.conn_db_delete_all = function(arg, callback) {
	let query = "delete from conn_clients";
	this.conn.query(query, callback);
};

connectionsDAO.prototype.connected_device_user = function(user_id, callback) {
	let query = "select * from conn_clients where user_id = ?";
	this.conn.query(query, [user_id], callback);
};


module.exports = function(){
	return connectionsDAO;
};