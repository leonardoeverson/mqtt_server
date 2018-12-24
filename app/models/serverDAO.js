function serverDAO(conn){
    this.conn = conn;
}

serverDAO.prototype.get_server_user_settings = function (id_user, callback){
    let query = "select * from server_options left join user_options on server_options.id_option = user_options.id_server_option and user_options.id_user = " + id_user;

    conn.query(query, callback);

};

serverDAO.prototype.post_server_user_settings = function (id_user, callback){
    let query = "select * from server_options left join user_options on server_options.id_option = user_options.id_server_option and user_options.id_user = " + id_user;

    conn.query(query, callback);

}

module.exports= function(){
    return serverDAO;
};
