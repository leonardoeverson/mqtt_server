//Servidor HTTP
var app = require('./config/server');

app.listen(80,function(){
  console.log('Servidor Iniciado na Porta 80');
})

//Servidor MQTT e WS
var aedes = require('./config/aedes_server');

