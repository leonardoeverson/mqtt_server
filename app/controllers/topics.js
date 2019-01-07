module.exports.topic_subscribe_register = function(app, subscriptions, client){
    let conn = app.config.dbconn();
    let topicsDAO = new app.app.models.topicsDAO(conn);
    let dados = {};
    dados.subscriptions = subscriptions.topic;
    dados.device_id = client.device_id;
    dados.qos = subscriptions.qos;

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