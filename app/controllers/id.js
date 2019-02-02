module.exports.make_id = function(tamanho, usa_maiusculas, usa_minusculas, usa_numeros, usa_simbolos){

    return new Promise((resolve, reject)=>{
        let text = "";
        let maiusculas = "abcdefghijklmnopqrstuvwxyz";
        let minusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

module.exports.create_ids = async function(app){

    let idDAO = new app.app.models.idDAO(conn);
    let dados = {};
    dados.username = await make_id(8, false, true, false, false);
    dados.senha = await make_id(12, true, true, true, false);
    dados.user_id = request.session.user_id;

    idDAO.cria_ids(dados, (err, result)=>{
        if(!err){
            callback(null, result);
        }else{
            callback(err, null, 'erro ao criar os ids de usuário e senha');
        }
    });

};