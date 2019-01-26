function tokensDAO(conn){
    this.connection = conn;
}

tokensDAO.prototype.user_token_insert = function(dados, callback){
    console.log(dados);
    let query = 'INSERT into tokens(user_id, token_value) VALUES (?)';
    this.connection.query(query, [dados], callback);
};

tokensDAO.prototype.user_token_get = function(dados, callback){
    let query = 'select * from tokens where user_id = ?';
    this.connection.query(query, [dados.user_id], callback);
};

tokensDAO.prototype.user_token_compare = function(dados, callback){
    let query = 'select * from tokens where token_value= ?';
    this.connection.query(query, [dados], callback);
};

module.exports = function(){
    return tokensDAO;
};