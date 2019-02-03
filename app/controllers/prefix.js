module.exports.prefix_db_insert = function(app, dados, prefix){
    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);

    utilsDAO.insert_prefix_db(dados, (error, result) =>{
        app.app.controllers.connections.db_end_connection(conn);
        if(error){
            console.log(error)
        }
    })
};

module.exports.prefix_db_get = function(app, user_id){
    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);

    return new Promise((resolve, rejetct) =>{
        utilsDAO.get_prefix_db(dados, (error, result) =>{
            app.app.controllers.connections.db_end_connection(conn);
            if(!error){
                resolve(result[0].prefix_value);
            }else{
                console.log(error);
                rejetct(throw new Error(error));
            }
        });
    });
};

module.exports.prefix_db_search = async function(app, prefix){

    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);

    return new Promise((resolve, reject) => {
        utilsDAO.search_prefix_db(prefix, (err, result) =>{
            if(!err && result.length == 0){
                resolve(result);
            }else{
                console.log(err);
                reject(throw new Error(err));
            }
        })
    })
};

module.exports.create_prefix = async function(app, request){

    return new Promise(async (resolve, reject) => {
        let conn = app.config.dbconn();
        let utilsDAO = new app.app.models.utilsDAO(conn);
        let dados = {};
        dados.prefix = await app.app.controllers.id.make_id(6, true, true, true, false);
        dados.user_id = request.session.user_id;

        while (true) {
            let test = await app.app.controllers.prefix.prefix_db_search(app, dados.prefix);
            if (test) {
                break;
            }
            dados.prefix = await app.app.controllers.id.make_id(6, true, true, true, false);
        }

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