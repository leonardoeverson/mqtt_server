module.exports.topic_subscribe_register = function(app, subscriptions, client){
    let conn = app.config.dbconn();
    let topicsDAO = new app.app.models.topicsDAO(conn);

    let dados = {};
    dados.tp_subscribe = subscriptions[0].topic;
    dados.device_id = client;
    dados.qos = subscriptions[0].qos;

    topicsDAO.topic_subscribe_register_db(dados, (error, result)=>{
        if(!error){
            conn.destroy();
        }else{
            console.log(error);
            conn.destroy();
        }
    })

};

module.exports.publish_metrics = function(app, client){
    let conn = app.config.dbconn();
    let topicsDAO = new app.app.models.topicsDAO(conn);

    topicsDAO.publish_metrics_db(dados, (error, result)=>{
        if(!error){
            conn.destroy();
        }else{
            console.log(error);
            conn.destroy();
        }
    })
};