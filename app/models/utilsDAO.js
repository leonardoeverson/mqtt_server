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

utilsDAO.prototype.grava_token = function(id, token, lifetime, callback){
    var query = "insert into tokens_links(user_id, activate_date, lifetime, token) values("+id+",NOW(),"+lifetime+",'"+token+"')";
    this._connection.query(query,callback);
}

utilsDAO.prototype.atualiza_token = function(token_id, callback){
    var query = "update tokens_links set used_date = NOW() where token_id="+token_id;
    this._connection.query(query,callback);
}

utilsDAO.prototype.pesquisa_token = function(request_id, token_id, callback){
    var query = "select * from tokens_links where token_id="+token_id+" and token='"+request_id+"' and used_date is null";
    this._connection.query(query,callback);
}

utilsDAO.prototype.ultimo_registro = function(callback){
    var query = "SELECT LAST_INSERT_ID()";
    this._connection.query(query, callback);
    //select * from tokens where now() < addtime(activate_date, concat(lifetime,":00:00"))
}

utilsDAO.prototype.conn_record = function(user_id, req, topic, callback){
    var query = "insert into connecteds (user_id, address, port, topic) values ("+user_id+",'"+req.connection.remoteAddress;
    query += "',"+req.connection.remotePort+",'"+topic+"')";

    this._connection(query, callback);
}

module.exports = function(){
    return utilsDAO;
};