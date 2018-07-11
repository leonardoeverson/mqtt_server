function devicesDAO(conn){
	this.connection = conn;
}

devicesDAO.prototype.register_devices_db = function(dados, callback) {
	var query = "insert into user_devices(user_id, device_name, device_topic) values("+dados.user_id+",'"+dados.device_name+"','"+dados.device_topic+"')";
	this.connection.query(query, callback);
};

module.exports = function(){
	return devicesDAO;
}
