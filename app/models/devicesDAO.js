function devicesDAO(conn){
    this.connection = conn;
}

devicesDAO.prototype.register_devices_db = function(dados, callback) {
    console.log(dados);
    let query = "insert into user_devices(user_id, device_name, publish, subscribe) values(?)";
    this.connection.query(query,[dados], callback);
};

devicesDAO.prototype.list_devices_db = function(dados, callback){
    let query = "SELECT user_devices.*, conn_clients.id_conn, conn_clients.client_id FROM user_devices ";
    query += "left join conn_clients on conn_clients.device_id = user_devices.device_id ";
    query += "where user_devices.user_id = ?";
    this.connection.query(query, [dados], callback);
};

devicesDAO.prototype.delete_device_db = function(device_id, callback){
    let query = "DELETE FROM user_devices WHERE device_id = ?";
    this.connection.query(query, [device_id], callback);
};

devicesDAO.prototype.connected_device_db = function(dados, callback){
    let query = "SELECT * FROM conn_clients WHERE user_id = ?";
    this.connection.query(query, [dados], callback);
};

devicesDAO.prototype.check_device_reg_db = function(dados, callback){
    let query = "SELECT * FROM user_devices WHERE user_id = ? and device_name = ?";
    this.connection.query(query, [dados.user_id, dados.device_name], callback);
};

module.exports = function(){
    return devicesDAO;
};
