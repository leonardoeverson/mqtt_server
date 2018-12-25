function serverDAO(conn){
    this.conn = conn;
}

serverDAO.prototype.get_server_user_settings = function (id_user, callback){
    let query = "select * from server_options left join user_options on server_options.id_option = user_options.id_server_option and user_options.id_user = " + id_user;

    conn.query(query, callback);

};

serverDAO.prototype.post_server_user_settings = function (dados, id_user, callback){

    conn.beginTransaction(function(err) {
        if (err) { throw err; }
        conn.query('DELETE FROM user_options where id_user = '+ id_user, function(err, result) {
            if (err) {
                conn.rollback(function() {
                    callback(err, null);
                });
            }

            conn.query('insert into user_options(id_user, id_server_option) values ?', function(err, result) {
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
                    conn.end();

                    callback(null, 'Transaction Complete.');

                });
            });
        });
    });
};

module.exports= function(){
    return serverDAO;
};
