function tokensDAO(conn){
    this.connection = conn;
}

tokensDAO.prototype.user_token_insert = function(dados, callback){
    let query = "INSERT into tokens(user_id, token_value) VALUES("+dados.id_user+','+dados.uuid+')';
    this.connection.query(query, callback);
};

tokensDAO.prototype.user_token_get = function(dados, callback){
    let query = "";
    this.connection.query(query, callback);
};

module.exports = function(){
    return tokensDAO;
}