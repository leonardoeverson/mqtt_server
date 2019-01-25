function utilsDAO(conn){
    this.conn = conn;
}

utilsDAO.prototype.get_prefix_db = function(id_user, callback){
   let query = "SELECT prefix_value FROM user_prefix WHERE id_user= ? ";
   this.conn.query(query, [id_user], callback);
};

utilsDAO.prototype.insert_prefix_db = function(dados, callback){
    let query = "INSERT INTO user_prefix(id_user, prefix_value) VALUES (?,?)";
    this.conn.query(query, [dados], callback);
};

module.exports = function(){
    return utilsDAO;
};