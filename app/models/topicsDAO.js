function topicsDAO(conn){
    this.connection = conn;
}

topicsDAO.prototype.topic_subscribe_register_db = function(dados, callback) {
    let query = "INSERT INTO tp_subscribe(client_id, tp_subscribe, qos, device_id) VALUES (?,?,?,?)";
    this.connection.query(query,[dados.client_id, dados.tp_subscribe, dados.qos, dados.device_id],callback);
};

topicsDAO.prototype.publish_metrics_db = function(dados, callback){
    let query= "INSERT INTO mqtt_metrics(device_id, topic, length, user_id, conn_id, timestamp) VALUES";
    query += "("+dados.device_id+",'"+dados.topic+"',"+dados.length+","+dados.user_id+",";
    query += dados.conn_id+", NOW())";
    this.connection.query(query, dados, callback);
};

topicsDAO.prototype.traffic_message_metric_db = function(dados, callback){

    let query;
    if(dados.periodo == 1){
        query = "select count(*) as quantidade, timestamp as marca from mqtt_metrics where DAY(timestamp) = DAY(CURDATE()) ";
        query += "and user_id = ?";
        query += " group by(hour(timestamp)) asc;";
        query += "select sum(length) as quantidade, timestamp as marca from mqtt_metrics where DAY(timestamp) = DAY(CURDATE()) ";
        query += "and user_id = ?";
        query += " group by(hour(timestamp)) asc;";
    }else{
        query = "SELECT * FROM(select count(MINUTE(timestamp)) as quantidade, timestamp as tempo, DATE_FORMAT(timestamp, '%T') as marca ";
        query += "from mqtt_metrics where DAY(timestamp) = DAY(CURDATE()) and user_id = ?" ;
        query += " group by hour(tempo), minute(tempo) order by tempo desc limit 30) s1 order by tempo asc;";
        query += "SELECT * FROM(select count(MINUTE(timestamp)), sum(length) as quantidade, timestamp as tempo, DATE_FORMAT(timestamp, '%T') as marca ";
        query += "from mqtt_metrics where DAY(timestamp) = DAY(CURDATE()) and user_id = ?" ;
        query += " group by hour(tempo), minute(tempo) order by tempo desc limit 30) s2 order by tempo asc;";
    }

    this.connection.query(query, [dados.user_id, dados.user_id], callback);
};



topicsDAO.prototype.conn_metrics_db = function(dados, callback){

};

module.exports = function(){
    return topicsDAO;
};