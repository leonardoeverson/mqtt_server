//Servidor HTTP
var app = require('./config/server');

app.listen(80,function(){
  console.log('Servidor Iniciado na Porta 80');
})

//Servidor MQTT e WS
var aedes = require('./config/aedes_server');

aedes.authenticate = function (client, username, password, callback) {
   //checar novo de usuário e senha
   //Gerenciando logins
   app.app.controllers.login.login_dispositivo(app, client, username, password, callback)
   
   //permitir acesso

   //negar
}
