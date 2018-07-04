var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser')
var helmet = require('helmet')

//Express
var app = express()

//body parser
//Informando ao express para usar o body parser
app.use(bodyParser.urlencoded({extended: true}));

//helmet
app.use(helmet())

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