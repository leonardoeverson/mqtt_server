function utilsDAO(conn){
    this.conn = conn;
}

utilsDAO.prototype.get_prefix_db = function(user_id, callback){
   let query = "SELECT prefix_value FROM user_prefix WHERE user_id= ? ";
   this.conn.query(query, [user_id], callback);
};

utilsDAO.prototype.insert_prefix_db = function(dados, callback){
    let query = "INSERT INTO user_prefix(user_id, prefix_value) VALUES (?,?)";
    this.conn.query(query, [dados], callback);
};

module.exports = function(){
    return utilsDAO;
};