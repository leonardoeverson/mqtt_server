module.exports.prefix_gen = function (prefix_size) {

    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < prefix_size; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

};

module.exports.prefix_db_insert = function(app, dados){
    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);

    utilsDAO.insert_prefix_db(dados, (error, result) =>{
        app.app.controllers.connections.db_end_connection(conn);
        if(error){
            console.log(error)
        }
    })
};

module.exports.prefix_db_get = function(app, dados){
    let conn = app.config.dbconn();
    let utilsDAO = new app.app.models.utilsDAO(conn);

    utilsDAO.get_prefix_db(dados, (error, result) =>{
        app.app.controllers.connections.db_end_connection(conn);
        if(!error){
            return result;
        }else{
            console.log(error);
        }
    })
};