function devicesDAO(conn){
    this.connection = conn;
}

devicesDAO.prototype.register_devices_db = function(dados, callback) {
    let query = "insert into user_devices(user_id, device_name, publish, subscribe) values(?, ?, ?, ?)";
    this.connection.query(query,[dados.user_id, dados.device_name, dados.publish, dados.subscribe], callback);
};

devicesDAO.prototype.device_pb_topic_db = function(dados, callback){
    let query = "insert into device_pb_topic(device_id, pb_topic) values ?";
    this.connection.query(query,[dados], callback);
};

devicesDAO.prototype.device_sb_topic_db = function(dados, callback){
    let query = "insert into device_sb_topic(device_id, sb_topic) values ?";
    this.connection.query(query,[dados], callback);
};

devicesDAO.prototype.device_sb_pb_topic_delete = function(device_id, callback){
    let query = 'delete from device_pb_topic where device_id = ?; delete from device_sb_topic where device_id = ?';
    this.connection.query(query, [device_id, device_id], callback);
}

devicesDAO.prototype.get_device_pb_topic_db = function(dados, callback){
    let query = "select * from device_pb_topic where device_id = ?";
    this.connection.query(query,[dados], callback);
};

devicesDAO.prototype.get_device_sb_topic_db = function(dados, callback){
    let query = "select * from device_sb_topic where device_id = ?";
    this.connection.query(query,[dados], callback);
};

devicesDAO.prototype.list_devices_db = function(dados, callback){
    let query = "SELECT user_devices.*, conn_clients.id_conn, conn_clients.client_id FROM user_devices ";
    query += "left join conn_clients on conn_clients.device_id = user_devices.device_id ";
    query += "where user_devices.user_id = ?";
    this.connection.query(query, [dados.user_id], callback);
};

devicesDAO.prototype.delete_device_db = function(device_id, callback){
    let query = "DELETE FROM user_devices WHERE device_id = ?";
    this.connection.query(query, [device_id], callback);
};

devicesDAO.prototype.connected_device_db = function(dados, callback){
    let query = "SELECT * FROM conn_clients WHERE user_id = ?";
    this.connection.query(query, [dados.user_id], callback);
};

devicesDAO.prototype.check_device_reg_db = function(dados, callback){
    let query = "SELECT * FROM user_devices WHERE user_id = ? and device_name = ?";
    this.connection.query(query, [dados.user_id, dados.device_name], callback);
};

devicesDAO.prototype.get_device_data_db = function(dados, callback){
    let query = 'SELECT device_id, device_name, subscribe, publish from user_devices where device_id = ? and user_id =?;';
    let query2 = 'SELECT * from device_pb_topic where device_id = ?;';
    let query3 = 'SELECT * from device_sb_topic where device_id = ?;';

    this.connection.query(query + query2 + query3,[dados.device_id, dados.user_id, dados.device_id, dados.device_id], callback);
};

devicesDAO.prototype.update_device_data_db = function(dados, callback){
    let query = 'UPDATE user_devices set device_name = ?, publish = ?, subscribe = ? where device_id = ? and user_id = ?';
    this.connection.query(query, [dados.device_name, dados.publish, dados.subscribe, dados.device_id, dados.user_id], callback);
};

module.exports = function(){
    return devicesDAO;
};