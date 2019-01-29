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
}
module.exports = function(){
	return loginDAO;
};