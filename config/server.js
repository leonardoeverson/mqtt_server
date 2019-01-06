let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let helmet = require('helmet');
let session = require("express-session");
let morgan = require("morgan");
let RED = require("node-red");

//Express
let app = express();

//body parser
//Informando ao express para usar o body parser
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//helmet
app.use(helmet());

//Express Session
app.use(session({
  secret: '1234567890![]?:>.;@#$%¨&*()_-+§qazxswedcvfrtgbnyujmkiolpç^~;.',
  resave: false,
  saveUninitialized: false
}));

app.use(function(request, response, next){
  //response.setHeader("Access-Control-Allow-Origin","*")//Cross-domain
  response.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");//Cross-domain
  //response.setHeader("Access-Control-Allow-Headers","*")//Cross-domain
  response.setHeader("Access-Control-Allow-Credentials",true);//Cross-domain

  next();
});

//morgan
if(app.get('env') === 'development'){
    app.use(morgan('dev'))
}

//Arquivos Estáticos
//Pastas estáticas
app.use(express.static('public'));

//Configurando Engine
app.set('view engine','ejs');

//Localizando Views
app.set('views','./app/views');

//Express Validator
let expressValidator = require('express-validator');

//validação de senhas
app.use(expressValidator({
  customValidators: {
    isEqual: (value1, value2) => {
      return value1 === value2
    }
  }
}));

//Localizando arquivos
//Localizando rotas e models

consign({cwd: process.cwd()})
  .include('./app/routes')
  .then('./config/dbconn.js')
  .then('app/models')
  .then('app/controllers')
  .into(app);

module.exports = app;