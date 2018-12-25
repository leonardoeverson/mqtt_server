function devicesDAO(conn){
	this.connection = conn;
}

devicesDAO.prototype.register_devices_db = function(dados, callback) {
	let query = "insert into user_devices(id_user, device_name, publish, subscribe) values("+dados.id_user+",'"+dados.device_name+"','"+dados.publish+"','"+ dados.subscribe +"')";
	this.connection.query(query, callback);
};

devicesDAO.prototype.list_devices_db = function(dados, callback){
	let query = "SELECT device_id, device_name FROM user_devices where id_user = "+dados.id_user;
	this.connection.query(query, callback);
};

devicesDAO.prototype.delete_device_db = function(device_id, callback){
	let query = "DELETE FROM user_devices WHERE device_id =" + device_id;
	this.connection.query(query, callback);
};

devicesDAO.prototype.connected_device_db = function(id_user, callback){

};

module.exports = function(){
	return devicesDAO;
};
