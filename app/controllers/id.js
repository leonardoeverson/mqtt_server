module.exports.make_id = function(tamanho, usa_maiusculas, usa_minusculas, usa_numeros, usa_simbolos){

    return new Promise((resolve, reject)=>{
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

        resolve(text);
    });


};

module.exports.create_ids = async function(app, request){

    let conn = app.config.dbconn();
    let idDAO = new app.app.models.utilsDAO(conn);
    let dados = {};
    let test = false;

    try{
        dados.username = await app.app.controllers.id.make_id(8, false, true, false, false);
        dados.senha = await app.app.controllers.id.make_id(12, true, true, true, false);
        dados.user_id = request.session.user_id;
    }catch (e) {
        console.log(e);
    }

    test = await app.app.controllers.id.pesquisa_username(app, dados.username);
    if (!test) {
        app.app.controllers.id.create_ids(app, request);
    }



    return new Promise(async (resolve, reject) => {

        idDAO.grava_ids(dados, (err, result) => {
            app.app.controllers.connections.db_end_connection(conn);
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

module.exports.pesquisa_username = function(app, id){

    let conn = app.config.dbconn();
    let idDAO = new app.app.models.utilsDAO(conn);

    return new Promise((resolve, reject) =>{
        idDAO.pesquisa_username_seq(id, (err, result) =>{
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
    });
};