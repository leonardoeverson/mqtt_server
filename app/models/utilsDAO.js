function utilsDAO(conn){
    this.conn = conn;
}

utilsDAO.prototype.get_prefix_db = function(user_id, callback){
   let query = "SELECT prefix_value FROM user_prefix WHERE user_id= ? ";
   this.conn.query(query, [user_id], callback);
};

utilsDAO.prototype.insert_prefix_db = function(dados, callback){
    let query = "INSERT INTO user_prefix(user_id, prefix_value) VALUES (?,?)";
    this.conn.query(query, [dados.user_id, dados.prefix], callback);
};

utilsDAO.prototype.search_prefix_db = function(prefix, callback){
    prefix = '%'+prefix+'%';
    let query = "select * from user_prefix where prefix_value like ?";
    this.conn.query(query, [prefix], callback);
};

utilsDAO.prototype.grava_ids = function(dados, callback){
    let query = 'INSERT into device_username_password(user_id, username, password) VALUE (?, ?, ?)';
    this.conn.query(query, [dados.user_id, dados.username, dados.senha], callback);
};

utilsDAO.prototype.pesquisa_username_seq = function(dados, callback){
    dados = '%'+dados+'%';
    let query = "select * from device_username_password where username like ?";
    this.conn.query(query, [dados], callback);
};

module.exports = function(){
    return utilsDAO;
};