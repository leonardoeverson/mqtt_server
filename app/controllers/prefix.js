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

module.exports.prefix_db_get = function(app, user_id){
    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);

    return new Promise((resolve, reject) =>{
        utilsDAO.get_prefix_db(user_id, (error, result) =>{
            app.app.controllers.connections.db_end_connection(conn);
            if(!error && result.length > 0){
                resolve(result[0].prefix_value);
            }else{

                if(error){
                    console.log(error);
                    reject(new Error(error));
                }

                resolve(false);
            }
        });
    });
};

module.exports.prefix_db_search = async function(app, prefix){

    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);

    return new Promise((resolve, reject) => {
        utilsDAO.search_prefix_db(prefix, (err, result) =>{
            app.app.controllers.connections.db_end_connection(conn);
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
    })
};

module.exports.create_prefix = async function(app, request){

    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);
    let dados = {};
    let test = false;
    dados.prefix = await app.app.controllers.id.make_id(6, true, true, true, false);
    dados.user_id = request.session.user_id;

     test = await app.app.controllers.prefix.prefix_db_search(app, dados.prefix);
     if (!test) {
         app.app.controllers.prefix.create_prefix(app, request);
     }

    return new Promise(async (resolve, reject) => {
        utilsDAO.insert_prefix_db(dados, (err, result) => {
            app.app.controllers.connections.db_end_connection(conn);
            if (!err) {
                resolve(result);
            } else {
                console.log(err);
                reject(err);
            }
        });
    });

};