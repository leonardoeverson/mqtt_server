function tokensDAO(conn){
    this.connection = conn;
}

tokensDAO.prototype.user_token_insert = function(dados, callback){
    let query = 'INSERT into tokens(user_id, token_value) VALUES (?, ?)';
    this.connection.query(query, [dados.user_id, dados.token_value], callback);
};

tokensDAO.prototype.user_token_get = function(dados, callback){
    let query = 'select * from tokens where user_id = ? and datediff(now(), timestamp) < 1';
    this.connection.query(query, [dados.user_id], callback);
};

tokensDAO.prototype.user_token_compare = function(dados, callback){
    let query = 'select * from tokens where token_value= ? and user_id= ?';
    this.connection.query(query, [dados[0], dados[1]], callback);
};

tokensDAO.prototype.delete_tokens = function(callback){
    this.connection.query('delete from tokens', callback);
};

tokensDAO.prototype.get_username_password_db = function(user_id, callback){
    let query = 'select * from device_username_password where user_id= ?';
    this.connection.query(query, [user_id], callback);
};

module.exports = function(){
    return tokensDAO;
};