function loginDAO(conn){
	this.connection = conn;
}

loginDAO.prototype.valida_login = function(dados, callback) {
	let query = "SELECT * FROM users where email = ?";
	this.connection.query(query,[dados.email],callback);
};

loginDAO.prototype.valida_senha = function(user_id, callback){
	let query = "SELECT senha FROM users where user_id = ?";
	this.connection.query(query, [user_id], callback)
};

loginDAO.prototype.login_dispositivo = function(dados, callback){
	let query = 'select * from device_username_password where username = ?  and password = ?';
	this.connection.query(query, [dados.username, dados.password], callback);
};

module.exports = function(){
	return loginDAO;
};