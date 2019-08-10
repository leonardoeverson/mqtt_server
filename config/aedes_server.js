let httpServer = require('http').createServer();
let ws = require('websocket-stream');
let port = 1883;
let wsPort = 8888;
let aedesPersistenceMongoDB = require('aedes-persistence-mongodb');
let url = 'mongodb+srv://dbAccess:zS6gPI0bnz2eU5Y0@cluster0-7fkit.mongodb.net/test?retryWrites=true&w=majority/aedes_mq' ;
let url_prst = 'mongodb+srv://dbAccess:zS6gPI0bnz2eU5Y0@cluster0-7fkit.mongodb.net/test?retryWrites=true&w=majority/aedes_persistence';
let dbname = 'aedes_mq';

if(process.env.MONGODB_PORT_27017_TCP_ADDR){
    url = 'mongodb://'+process.env.MONGODB_USE;
    url += ':' + process.env.MONGODB_PASSWORD;
    url += '@'+process.env.MONGODB_PORT_27017_TCP_ADDR;
    url += ':' + process.env.MONGODB_SERVICE_PORT +'/' + dbname
    url_prst = 'mongodb://'+process.env.MONGODB_USER;
    url_prst += ':'+process.env.MONGODB_PASSWORD;
    url_prst += '@'+process.env.MONGODB_PORT_27017_TCP_ADDR;
    url_prst += ':' + process.env.MONGODB_SERVICE_PORT +'/aedes_persistence';
}

//Aedes Persistence
let persistence = aedesPersistenceMongoDB({url: url_prst});

//Emitter
let mqmongo = require('mqemitter-mongodb');

let emitter = mqmongo({url: url});

//Aedes Server
let aedes = require("aedes")({mq: emitter, persistence: persistence});

//let aedes = require('aedes')();

let server = require('net').createServer(aedes.handle);

//Servidor na porta 1883
server.listen(port, function (socket) {console.log('Servidor MQTT escutando na porta:', port)});

server.on('connection', function(client) {console.log("novo client", client.remoteAddress)});

//Servidor na porta 8888
ws.createServer({server: httpServer}, aedes.handle);

httpServer.listen(wsPort, function () { console.log('Servidor websocket escutando na porta:', wsPort)});

module.exports = aedes;
