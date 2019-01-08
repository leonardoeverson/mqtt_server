module.exports.topic_subscribe_register = function(app, subscriptions, client){
    let conn = app.config.dbconn();
    let topicsDAO = new app.app.models.topicsDAO(conn);
    let dados = {};
    dados.tp_subscribe = subscriptions[0].topic;
    dados.device_id = client;
    dados.qos = subscriptions[0].qos;

    topicsDAO.topic_subscribe_register_db(dados, (error, result)=>{
        if(!error){
            app.app.controllers.connections.db_end_connection(conn);
            console.log("topic_subscribe_register_db");
        }else{
            console.log(error);
            conn.destroy();
        }
    })

};

module.exports.publish_metrics = function(app, packet, client){
    let conn = app.config.dbconn();
    let topicsDAO = new app.app.models.topicsDAO(conn);

    let dados = {};
    dados.length = packet.payload.byteLength;
    dados.topic = packet.topic;
    topicsDAO.publish_metrics_db(dados, (error, result)=>{
        if(!error){
            conn.destroy();
        }else{
            console.log(error);
            conn.destroy();
        }
    })
};