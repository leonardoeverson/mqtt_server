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

module.exports.publish_metrics_insert = function(app, packet, client){
    let conn = app.config.dbconn();
    let topicsDAO = new app.app.models.topicsDAO(conn);
    let dados = {};
    dados.length = packet.payload.byteLength;
    dados.topic = packet.topic;
    dados.device_id = client.conn.device_id;
    dados.conn_id = client.conn.conn_id;
    dados.user_id = client.conn.id_user;
    topicsDAO.publish_metrics_db(dados, (error, result)=>{
        if(!error){
            conn.destroy();
        }else{
            console.log(error);
            conn.destroy();
        }
    })

    // let conn_mongogb = mongodb_conn({length: Number, topic : String , client_id: Number});
    // let data_mqtt_metrics = new conn_mongogb({length: packet.payload.byteLength, topic : packet.topic, client_id: client.conn.user_id});
    // data_mqtt_metrics.save().then();

};

module.exports.message_metric = function(app, request, response){
    let conn = app.config.dbconn();
    let topicsDAO = new app.app.models.topicsDAO(conn);
    let dados = {};
    dados.user_id = request.session.id_user;
    topicsDAO.message_metric_db(dados, (error, result)=>{
        if(!error){
            response.send(result).end();
        }else{
            console.log(error);
        }
    })
};

module.exports.traffic_metric = function(app, request, response){
    let conn = app.config.dbconn();
    let topicsDAO = new app.app.models.topicsDAO(conn);
    let dados = {};
    dados.user_id = request.session.id_user;
    topicsDAO.traffic_metric_db(dados, (error, result)=>{
        if(!error){
            response.send(result).end();
        }else{
            console.log(error);
        }
    })
};

module.exports.conn_metrics = function(app, request, response){
    let conn = app.config.dbconn();
    let topicsDAO = new app.app.models.topicsDAO(conn);
    let dados = {};
    dados.user_id = request.session.id_user;
    topicsDAO.conn_metrics_db(dados, (error, result)=>{
        if(!error){
            response.send(result).end();
        }else{
            console.log(error);
        }
    })
};

function mongodb_conn(schema){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/mqtt_metric', {useNewUrlParser: true});
    let Metric;
    try{
        if(mongoose.model('Metric')){
            return mongoose.model('Metric')
        }

    }catch (e) {
        if (e.name === 'MissingSchemaError') {
            schema = new mongoose.Schema(schema);
            Metric = mongoose.model('Metric', schema);
            return Metric;
        }
        console.log(e);
    }
}