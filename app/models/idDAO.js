function idDAO(conn){
    this.conn = conn;
};

idDAO.prototype.cria_ids = function(dados, callback){
    let query = 'INSERT into device_username_password(user_id, username, password) VALUE (?, ?, ?)';
    this.conn.query(query, [dados.user_id, dados.username, dados.password], callback);
};

module.exports = function(){
    return idDAO;
}