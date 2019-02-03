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

    try{
        dados.username = await app.app.controllers.id.make_id(8, false, true, false, false);
        dados.senha = await app.app.controllers.id.make_id(12, true, true, true, false);
        dados.user_id = request.session.user_id;
    }catch (e) {
        console.log(e);
    }

    let test = false;

    return new Promise(async (resolve, reject) => {

        while (!test) {
            test = await app.app.controllers.id.pesquisa_username(app, dados.username);
            if (test) {
                break;
            }

            dados.username = await make_id(8, false, true, false, false);
        }

        idDAO.grava_ids(dados, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
};

module.exports.pesquisa_username = function(app, id){

    let conn = app.config.dbconn();
    let idDAO = new app.app.models.utilsDAO(conn);

    return new Promise((resolve, reject) =>{
        idDAO.pesquisa_username_seq(id, (err, result) =>{
            if(!err && result.length == 0){
                resolve(result);
            }else{
                reject(err);
            }
        })
    });
};