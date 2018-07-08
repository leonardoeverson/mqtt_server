//Servidor HTTP
var app = require('./config/server');

app.listen(80,function(){
  console.log('Servidor Iniciado na Porta 80');
})

//Servidor MQTT e WS
var aedes = require('./config/aedes_server');

//Autenticação de clientes
aedes.authenticate = function (client, username, password, callback) {
   //checar novo de usuário e senha
   app.app.controllers.login.login_dispositivo(app, client, username, password, callback)
}

//Autorização de publish
aedes.authorizePublish = function (client, packet, callback) {
  if (packet.topic === 'aaaa') {
    return callback(new Error('wrong topic'))
  }

  if (packet.topic === 'bbb') {
    packet.payload = new Buffer('overwrite packet payload')
  }

  callback(null)
}

//Aedes Events
aedes.on("clientDisconnect",function(client){
	 console.log('cliente de id:', client.id, 'desconectou');
	 app.app.controllers.connections.conn_mgmt_delete(app, client.conn.user_id, client.id, client.conn.remoteIp, client.conn.remotePort);
})

aedes.on('clientError', function (client, err) {
  console.log('client error', client.id, err.message, err.stack)
  app.app.controllers.connections.conn_mgmt_delete(app, client.conn.user_id, client.id, client.conn.remoteIp, client.conn.remotePort);
})

aedes.on('connectionError', function (client, err) {
  console.log('client error', client, err.message, err.stack)
})

aedes.on('publish', function (packet, client) {
  if (client) {
    console.log('message from client', client.id)
  }
})

aedes.on('subscribe', function (subscriptions, client) {
  if (client) {
    console.log('subscribe from client', subscriptions, client.id)
  }
})

aedes.on('client', function (client) {
  console.log('new client', client.id)
})
