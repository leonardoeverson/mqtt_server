function devicesDAO(conn){
	this.connection = conn;
}

devicesDAO.prototype.register_devices_db = function(dados, callback) {
	var query = "insert into user_devices(id_user, device_name, publish, subscribe) values("+dados.user_id+",'"+dados.device_name+"','"+dados.publish+"','"+ dados.subscribe +"')";
	this.connection.query(query, callback);
};

devicesDAO.prototype.list_devices_db = function(dados, callback){
	var query = "SELECT device_id, device_name FROM user_devices where id_user = "+dados.user_id;
	this.connection.query(query, callback);
};

module.exports = function(){
	return devicesDAO;
};
