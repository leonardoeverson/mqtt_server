//Servidor HTTP
let app = require('./config/server');
//let RED = require('node-red');
let port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('Servidor Iniciado na Porta:',port);
});

//Node Red
/*let settings = {
	httpAdminRoot:"/red",
	httpNodeRoot: "/api",
	userDir:".nodered/",
	functionGlobalContext: { }    // enables global context
};

RED.init(app,settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

RED.start();
*/

//Servidor MQTT e WS
let aedes = require('./config/aedes_server');

//Exclui os registros das conexões anteriores
app.app.controllers.connections.conn_mgmt_delete_all(app);

//Autenticação de clientes
aedes.authenticate = function (client, username, password, callback) {
   //checar novo de usuário e senha
   app.app.controllers.login.login_dispositivo(app, client, username, password, callback)
};

//Autorização de publish
aedes.authorizePublish = function (client, packet, callback) {
	callback(null)
};

//Aedes Events
aedes.on("clientDisconnect",function(client){
	console.log('cliente de id:', client.id, 'desconectou');
	app.app.controllers.connections.conn_mgmt_delete(app, client.conn.id_user, client.id, client.conn.remoteIp, client.conn.remotePort);
});

aedes.on('clientError', function (client, err) {
	console.log('client error', client.id, err.message, err.stack);
	app.app.controllers.connections.conn_mgmt_delete(app, client.conn.id_user, client.id, client.conn.remoteIp, client.conn.remotePort);
});

aedes.on('connectionError', function (client, err) {
	console.log('Erro de conexão', client, err.message, err.stack)
});

aedes.on('publish', function (packet, client) {

	if (client) {
    	//console.log('message from client', client.id)
	}
});

aedes.on('subscribe', function (subscriptions, client) {
	if (client) {
    	console.log('subscribe from client', subscriptions, client.id)
	}
});

aedes.on('client', function (client) {
	console.log('new client', client.id)
});
