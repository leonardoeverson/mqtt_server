function idDAO(conn){
    this.conn = conn;
};

idDAO.prototype.grava_ids = function(dados, callback){
    let query = 'INSERT into device_username_password(user_id, username, password) VALUE (?, ?, ?)';
    this.conn.query(query, [dados.user_id, dados.username, dados.password], callback);
};

idDAO.prototype.pesquisa_username_seq = function(dados, callback){
    let query = "select * from device_username_password where username like '%?%'";
    this.conn.query(query, [dados], callback);
};

module.exports = function(){
    return idDAO;
}