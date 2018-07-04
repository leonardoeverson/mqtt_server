var express = require('express');
var consign = require('consign');

//Express
var app = express()

//Arquivos Estáticos
//Pastas estáticas
app.use(express.static('public'));

//Configurando Engine
app.set('view engine','ejs');

//Localizando Views
app.set('views','./app/views');

//Localizando arquivos
//Localizando rotas e models
consign()
  .include('./app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app);


module.exports = app