function serverDAO(conn){
    this.conn = conn;
}

serverDAO.prototype.get_server_user_settings = function (user_id, callback){
    let query = "select * from server_options left join user_options on server_options.id_option = user_options.id_server_option";
    query += " and user_options.user_id = ? order by server_options.id_option";
    conn.query(query, [user_id], callback);
};

serverDAO.prototype.post_server_user_settings = function (dados, user_id, callback){

    if(dados.length > 0){
        conn.beginTransaction(function(err) {
            if (err) {
                callback(err, null);
            }
            conn.query('DELETE FROM user_options where user_id = ?',[user_id], function(err, result) {
                if (err) {
                    conn.rollback(function() {
                        callback(err, null);
                    });
                }
                conn.query('insert into user_options(user_id, id_server_option) values ?', [dados], function(err, result) {
                    if (err) {
                        conn.rollback(function() {
                            callback(err, null);
                        });
                    }
                    conn.commit(function(err) {
                        if (err) {
                            conn.rollback(function() {
                                callback(err, result);
                            });
                        }

                        console.log('Transaction Complete.');
                        callback(null, 'Transaction Complete.');

                    });
                });
            });
        });
    }else{
        conn.query('DELETE FROM user_options where user_id = ?', [user_id], callback);
    }

};

serverDAO.prototype.get_server_option_db = function(dados, callback){
    let query = "select * from user_options where id_server_option = "+ dados.id_option+" and user_id = "+dados.user_id;
    conn.query(query, callback);

};


module.exports= function(){
    return serverDAO;
};
