function connectionsDAO(conn){
	this.connection = conn
}

connectionsDAO.prototype.conn_db_insert = function(user_id, client_id, client_address, client_port, callback) {
	var query = "insert into connected_clients(user_id, client_id, client_address, client_port) values("+user_id+",'"+client_id+"','"+client_address+"',"+client_port+")";

	this.connection.query(query, callback);
};