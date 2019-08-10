module.exports.topic_subscribe_register = function(subscriptions, client){
    let conn = require('../../config/dbconn')();
    let topicsDAO = require('../models/topicsDAO');
    topicsDAO = new topicsDAO(conn);
    let dados = {};
    dados.tp_subscribe = subscriptions[0].topic;
    dados.client_id = client.id;
    dados.device_id = client.conn.device_id;
    dados.qos = subscriptions[0].qos;

    topicsDAO.topic_subscribe_register_db(dados, (error, result)=>{
        if(!error){
            connections.db_end_connection(conn);
            console.log("topic_subscribe_register_db");
        }else{
            console.log(error);
            conn.destroy();
        }
    })

};

 module.exports.publish_metrics_insert = function(packet, client){
    let conn = require('../../config/dbconn')();
    let topicsDAO = require('../models/topicsDAO')();
    topicsDAO = new topicsDAO(conn);
    let dados = {};
   
    dados.length = packet.payload.byteLength;
    dados.topic = packet.topic;
    dados.device_id = client.conn.device_id;
    dados.conn_id = client.conn.conn_id;
    dados.user_id = client.conn.user_id;
    topicsDAO.publish_metrics_db(dados, (error, result)=>{
        if(!error){
            conn.destroy();
        }else{
            console.log(error);
            conn.destroy();
        }
    })
};

module.exports.message_metric = function(request, response){
    let conn = require('../../config/dbconn')();
    let topicsDAO = require('../models/topicsDAO')();
    let dados = {};

    console.log(request.session);

    dados.user_id = request.session.user_id;
    dados.periodo = request.query.periodo;

    topicsDAO.traffic_message_metric_db(dados, (error, result)=>{
        if(!error){
            conn.destroy();
            response.send(result).end();
        }else{
            conn.destroy();
            console.log(error);
        }
    })
};


module.exports.conn_metrics = function(request, response){
    let conn = require('../../config/dbconn')();
    let topicsDAO = require('../models/topicsDAO')();
    let dados = {};
    dados.user_id = request.session.user_id;
    topicsDAO.conn_metrics_db(dados, (error, result)=>{
        if(!error){
            conn.destroy();
            response.send(result).end();
        }else{
            conn.destroy();
            console.log(error);
        }
    })
};

module.exports.topic_validation = function(client, topic, callback, type){

    //Verificar se é permitido publicar  ou subscrever no tópico

    //Verificar se tem o prefixo
    if(type === 1) {
        if (Number(client.publish_permission) !== 3) {
            if (topic.search(client.prefix) > -1) {

                if(client.publish_permission == 1){

                    for(let i = 0; i < client.publish_topics.length; i++){
                        if(topic.search(client.publish_topics[i].pb_topic) > -1){
                            callback(null);
                            return;
                        }
                    }

                    console.log("não é possível publicar neste tópico");
                    return callback(new Error('tópico não permitido'));
                }
                //Verificar as permissões de publicação
                else if(client.publish_permission == 2) {
                    callback(null);
                }

            } else {
                console.log("não é possível publicar neste tópico");
                return callback(new Error('tópico não permitido'));
            }
        } else {
            console.log("não é possível publicar neste tópico");
            return callback(new Error('tópico não permitido'));
        }
    }

    else if(type === 2){
        let sub = topic.topic;
        if(Number(client.subscribe_permission) !== 3){
            if(sub.search(client.prefix) > -1){

                //Verificar as permissões de assinatura
                if(client.subscribe_permission == 1){

                    for(let i = 0; i < client.subscribe_topics.length; i++){
                        if(sub.search(client.subscribe_topics[i].sb_topic) > -1){
                            callback(null, topic);
                            return;
                        }
                    }

                    console.log("não é possível subscrever neste tópico");
                    return callback(new Error('tópico não permitido'));
                }
                //Verificar as permissões de publicação
                else if(client.subscribe_permission == 2) {
                    callback(null, topic);
                }

            }else{
                console.log("não é possível subscrever neste tópico");
                return callback(new Error('tópico não permitido'));
            }
        }else{
            console.log("não é possível subscrever neste tópico");
            return callback(new Error('tópico não permitido'));
        }

    }


};
