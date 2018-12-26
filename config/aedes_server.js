
var httpServer = require('http').createServer();
var ws = require('websocket-stream');
var port = 1883;
var wsPort = 8888;
var aedesPersistenceMongoDB = require('aedes-persistence-mongodb')

//Aedes Persistence
let persistence = aedesPersistenceMongoDB({url: 'mongodb://127.0.0.1:27017/aedes_persistence'});

//Emitter
let mqmongo = require('mqemitter-mongodb');


let emitter = mqmongo({
    url: 'mongodb://localhost:27017/aedes_mq'
});


//Aedes Server
let aedes = require("aedes")({
    mq: emitter,
    persistence: persistence
});

//var aedes = require("aedes")();

let server = require('net').createServer(aedes.handle);

//Servidor na porta 1883
server.listen(port, function (socket) {
  console.log('Servidor MQTT escutando na porta:', port)
});

server.on('connection', function(client) {
   console.log("novo client", client.remoteAddress)
});

//Servidor na porta 8888
ws.createServer({
  server: httpServer
}, aedes.handle);


httpServer.listen(wsPort, function () {
  console.log('Servidor websocket escutando na porta:', wsPort)
});

module.exports = aedes;