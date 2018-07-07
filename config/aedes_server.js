
var httpServer = require('http').createServer()
var ws = require('websocket-stream')
var port = 1883
var wsPort = 8888
var aedesPersistenceDB = require('aedes-persistence-mongodb')
var mongodb = require('mqemitter-mongodb')


var persistence = aedesPersistenceDB({
  url: "mongodb://localhost:27017/aedes_persistence"
})

let aedesOpt = {
  persistence: persistence
}

/*
var emitter =mongodb({
  url: 'mongodb://localhost:27017/mqemitter'
})
*/

var aedes = require('aedes')(aedesOpt)
var server = require('net').createServer(aedes.handle)

server.listen(port, function () {
  console.log('server listening on port', port)
})

ws.createServer({
  server: httpServer
}, aedes.handle)

httpServer.listen(wsPort, function () {
  console.log('websocket server listening on port', wsPort)
})


module.exports = aedes