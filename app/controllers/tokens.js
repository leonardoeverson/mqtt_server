let token_user_insert = function(dados){
    let conn = require('../../config/dbconn')();
    let connections = require('../controllers/connections')
    
    let tokens = require('../models/tokensDAO')();
    let tokensDAO = new tokens(conn);

    return new Promise((resolve, reject)=>{
        tokensDAO.user_token_insert(dados, (error, result)=>{
            connections.db_end_connection(conn);
            if(!error){
                resolve(result);
            }else{
                console.log(error);
                reject(error);
            }

        })
    });
};

let token_user_get = function(dados){
    let conn = require('../../config/dbconn')();
    let connections = require('../controllers/connections')
    let tokens = require('../models/tokensDAO')();
    let tokensDAO = new tokens(conn);

    return new Promise((resolve, reject)=>{
        tokensDAO.user_token_get(dados, (error, result)=>{
            if(!error){
                connections.db_end_connection(conn);
                resolve(result);
            }else{
                console.log(error);
                connections.db_end_connection(conn);
                reject(error);
            }

        })
    });
};

module.exports.token_user_compare = function(dados){
    let conn = require('../../config/dbconn')();
    let tokens = require('../models/tokensDAO')();
    let tokensDAO = new tokens(conn);
    let connections = require('../controllers/connections');
    
    return new Promise((resolve, reject)=>{
        tokensDAO.user_token_compare(dados, (error, result)=>{
            connections.db_end_connection(conn);
            if(!error){
                resolve(result);
            }else{
                console.log(error);
                reject(error);
            }

        })
    });
};

module.exports.token_check = function (request) {

    let dados = {};
    dados.user_id = request.session.user_id;

    return new Promise(async (resolve, reject)=>{
        try {
            let check1 = await token_user_get(dados);

            if (check1.length > 0) {
                resolve("token:"+check1[0].token_value);
            } else {
                dados.token_value = require('uuid/v4')();
                let check2 = await token_user_insert(dados);
                resolve("token:"+dados.token_value);
            }

        } catch (e) {
            console.log('erro:', e);
            reject(e);
        }
    })

};

module.exports.delete_tokens_ = function(app){
    let conn = require('../../config/dbconn')();
    let connections = require('../controllers/connections')
    let tokens = require('../models/tokensDAO')();
    let tokensDAO = new tokens(conn);

    tokensDAO.delete_tokens((err, result)=>{
        connections.db_end_connection(conn);
        if(!err){
            console.log('delete_tokens');
        }else{
            console.log(result);
        }
    })
};


module.exports.get_username_password = function(user_id){
    let conn = require('../../config/dbconn')();
    let connections = require('../controllers/connections')
    let tokens = require('../models/tokensDAO')();
    let tokensDAO = new tokens(conn);

    return new Promise((resolve, reject) => {
        tokensDAO.get_username_password_db(user_id,(err, result)=>{
            connections.db_end_connection(conn);
            if(!err){
                resolve(result);
            }else{
                if(err){
                    reject(err);
                }

                resolve(false);
            }
        })
    });

};


module.exports.make_id = function(tamanho, usa_maiusculas, usa_minusculas, usa_numeros, usa_simbolos){

    let text = "";
    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = '0123456789';
    let simbolos = '_-*?;:{}{@#$%¨&*()]!';
    let possible = '';

    if(usa_maiusculas){
        possible += maiusculas;
    }

    if(usa_minusculas){
        possible += minusculas;
    }

    if(usa_numeros){
        possible += numeros;
    }

    if(usa_simbolos){
        possible += simbolos
    }

    for (let i = 0; i < tamanho; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

module.exports.create_ids = async function(request){

    let conn = require('../../config/dbconn')();
    let utilsDAO = require('../models/utilsDAO')();
    let connections = require('../controllers/connections');
    
    let idDAO = new utilsDAO(conn);
    let dados = {};
    let test;

    try{
        dados.username = module.exports.make_id(8, false, true, false, false);
        dados.senha = module.exports.make_id(12, true, true, true, false);
        dados.user_id = request.session.user_id;
    }catch (e) {
        console.log(e);
    }

    test = await module.exports.pesquisa_username(dados.username);
    if (!test) {
        return id.create_ids(request);
    }

    return new Promise(async (resolve, reject) => {

        idDAO.grava_ids(dados, (err, result) => {
            connections.db_end_connection(conn);
            if (!err) {
                resolve(result);
            } else {
                if(err){
                    reject(err);
                }

                resolve(false);
            }
        });
    });
};

module.exports.pesquisa_username = function(id){

    let conn = require('../../config/dbconn')();
    let utilsDAO = require('../models/utilsDAO')();
    let connections = require('../controllers/connections');
    let idDAO = new utilsDAO(conn);

    return new Promise((resolve, reject) =>{
        idDAO.pesquisa_username_seq(id, (err, result) =>{
            connections.db_end_connection(conn);
            if(!err && result.length == 0){
                resolve(true);
            }else{
                if(err){
                    console.log(err);
                    reject(err);
                }

                resolve(false);
            }
        })
    });
};



