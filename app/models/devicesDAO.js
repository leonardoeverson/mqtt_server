function devicesDAO(conn){
	this.connection = conn;
}

devicesDAO.prototype.register_devices_db = function(dados, callback) {
	var query = "insert into user_devices(user_id, device_name, device_topic) values("+dados.user_id+",'"+dados.device_name+"','"+dados.device_topic+"')";
	this.connection.query(query, callback);
};

devicesDAO.prototype.list_devices_db = function(dados, callback){
	var query = "SELECT device_id, device_name, device_topic FROM user_devices where user_id = "+dados.user_id;
	this.connection.query(query, callback);
}

module.exports = function(){
	return devicesDAO;
}
