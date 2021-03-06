//Servidor HTTP
let app = require('./config/server');
let port = process.env.PORT || 3000;

//requires
let login = require('./app/controllers/login')
let connections = require('./app/controllers/connections');
let tokens = require('./app/controllers/tokens');
let topics = require('./app/controllers/topics');

app.listen(port, function(){
    console.log('Servidor Iniciado na Porta:',port);
});

//Servidor MQTT e WS
let aedes = require('./config/aedes_server');

//Exclui os registros das conexões anteriores
connections.conn_mgmt_delete_all(app);

//Exclui registros de tokens
tokens.delete_tokens_(app);

//Autenticação de clientes
aedes.authenticate = function (client, username, password, callback) {
    //checar novo de usuário e senha
    login.login_dispositivo(app, client, username, password, callback)
};

//Autorização de publish
aedes.authorizePublish = function (client, packet, callback) {
    topics.topic_validation(app, client, packet.topic, callback, 1);
};

//Autorização de subscribe
aedes.authorizeSubscribe = function (client, sub, callback) {
    topics.topic_validation(app, client, sub, callback, 2);
};

//Aedes Events
aedes.on("clientDisconnect",function(client){
    console.log('cliente de id:', client.id, 'desconectou');
    connections.conn_mgmt_delete(app, client.conn.conn_id);
});

aedes.on('clientError', function (client, err) {
    console.log('client error', client.id, err.message, err.stack);
    //app.app.controllers.connections.conn_mgmt_delete(app, client.conn.user_id, client.id, client.conn.remoteIp, client.conn.remotePort);
});

aedes.on('connectionError', function (client, err) {
    //console.log('Erro de conexão', client, err.message, err.stack)
});

aedes.on('publish', function (packet, client) {
    if (client) {
        topics.publish_metrics_insert(app, packet, client);
    }
});

aedes.on('subscribe', function (subscriptions, client) {
    if (client) {
        topics.topic_subscribe_register(app, subscriptions, client);
        //console.log('subscribe from client', subscriptions, client.id);
    }
});

aedes.on('client', function (client) {
    //console.log('new client', client.id);
});
