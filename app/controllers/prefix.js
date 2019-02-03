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
                rejetct(error);
            }
        });
    });
};

module.exports.prefix_db_search = async function(app, prefix){

    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);

    return new Promise((resolve, reject) => {
        utilsDAO.pesquisa_username_seq(prefix, (err, result) =>{
            if(!err && result.length == 0){
                resolve(true);
            }else{
                reject(false);
            }
        })
    })
};

module.exports.create_prefix = async function(app, prefix){

    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);
    let dados = {};
    dados.prefix = await app.app.controllers.id.make_id(6,true, true, true, false);
    dados.user_id = request.session.user_id;


    while(true){
        let test = await prefix_db_search(app, dados.username);
        if(test){
            break;
        }
        dados.username = await make_id(8, false, true, false, false);
    }

    return new Promise((resolve, reject) =>{
        utilsDAO.insert_prefix_db(dados, (err, result)=>{
            app.app.controllers.connections.db_end_connection(conn);
            if(!err){
                //response.redirect("/home");
            }else{
               // callback(err, null, 'erro ao criar o prefixo');
            }
        });
    });




};