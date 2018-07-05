var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var session = require("express-session");
//Express
var app = express()

//body parser
//Informando ao express para usar o body parser
app.use(bodyParser.urlencoded({extended: true}));

//helmet
app.use(helmet())

//Express Session
app.use(session({
  secret: '1234567890!@#$%¨&*()_+qazxswedcvfrtgbnyujmkiolpç^~~;.',
  resave: false,
  saveUninitialized: false
}))

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