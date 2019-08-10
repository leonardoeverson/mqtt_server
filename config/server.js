let express = require('express');
//let consign = require('consign');
let bodyParser = require('body-parser');
let helmet = require('helmet');
let session = require("express-session");
let morgan = require("morgan");
//let error = require("../app/middleware/error");
//console.log(process.env);
let MongoDBStore = require('connect-mongodb-session')(session);

//Express
let app = express();

//body parser
//Informando ao express para usar o body parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//app.use(bodyParser.text());

//helmet
app.use(helmet());

app.use(function(request, response, next){
    response.setHeader("Access-Control-Allow-Origin","*")//Cross-domain
    response.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");//Cross-domain
    //response.setHeader("Access-Control-Allow-Headers","*")//Cross-domain
    response.setHeader("Access-Control-Allow-Credentials",true);//Cross-domain

    next();
});

//morgan
if(app.get('env') === 'development'){app.use(morgan('dev'))}

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

app.use('*', (request, response, next)=>{
    
    if(typeof(request.session) != "undefined"){
        request.session = request.session
    }
    
    next();
})

let store = new MongoDBStore({
    uri: 'mongodb+srv://dbAccess:zS6gPI0bnz2eU5Y0@cluster0-7fkit.mongodb.net/test?retryWrites=true&w=majority',
    collection: 'mySessions'
  });
   
// Catch errors
store.on('error', function(error) {
console.log(error);
});

//Express Session
app.use(session({
    secret: '1234567890![]?:>.;@#$%¨&*()_-+§qazxswedcvfrtgbnyujmkiolpç^~;.',
    resave: false,
    saveUninitialized: false,
    store: store
}));

app.use(express.Router())

//Rotas
app.use(require('../app/routes/cadastro'));
app.use(require('../app/routes/devices'));
app.use(require('../app/routes/home'));
app.use(require('../app/routes/interfaces'));
app.use(require('../app/routes/login'));
app.use(require('../app/routes/settings'));



module.exports = app;