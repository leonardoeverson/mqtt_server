// module.exports.prefix_db_insert = function(app, dados, prefix){
//     let conn = app.config.dbconn();
//     let utilsDAO = new app.app.models.utilsDAO(conn);
//
//     utilsDAO.insert_prefix_db(dados, (error, result) =>{
//         app.app.controllers.connections.db_end_connection(conn);
//         if(error){
//             console.log(error)
//         }
//     })
// };

module.exports.prefix_db_get = function (user_id) {
    
    let conn = require('../../config/dbconn')();
    let connections = require('../controllers/connections');
    let utils = require('../models/utilsDAO')();
    let utilsDAO = new utils(conn);

    return new Promise((resolve, reject) => {
        utilsDAO.get_prefix_db(user_id, (error, result) => {
           connections.db_end_connection(conn);
            if (!error && result.length > 0) {
                resolve(result[0].prefix_value);
            } else {

                if (error) {
                    console.log(error);
                    reject(new Error(error));
                }

                resolve(false);
            }
        });
    });
};

module.exports.prefix_db_search = async function (prefix) {

    let conn = require('../../config/dbconn')();
    let connections = require('../controllers/connections');
    let utils = require('../models/utilsDAO')();
    let utilsDAO = new utils(conn);

    return new Promise((resolve, reject) => {
        utilsDAO.search_prefix_db(prefix, (err, result) => {
            
            connections.db_end_connection(conn);
            if (!err && result.length === 0) {
                resolve(true);
            } else {
                if (err) {
                    console.log(err);
                    reject(err);
                }

                resolve(false);
            }
        })
    })
};

module.exports.create_prefix = async function (request) {

    let conn = require('../../config/dbconn')();
    let tokens = require('../controllers/tokens');
    let connections = require('../controllers/connections');
    let utils = require('../models/utilsDAO')();

    let utilsDAO = new utils(conn);
    
    let dados = {};
    let test;
    dados.prefix = tokens.make_id(6, true, true, true, false);
    dados.user_id = request.session.user_id;

    test = await module.exports.prefix_db_search(dados.prefix);
    if (!test) {
        return  module.exports.create_prefix(request);
    }

    //request.session.prefix_user = dados.prefix;
    return new Promise(async (resolve, reject) => {
        utilsDAO.insert_prefix_db(dados, (err, result) => {
           connections.db_end_connection(conn);
            if (!err) {
                resolve(result);
            } else {
                console.log(err);
                reject(err);
            }
        });
    });

};