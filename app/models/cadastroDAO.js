function cadastroDAO(conn){
    this.connection = conn;
}

cadastroDAO.prototype.grava_usuario = function(dados, callback) {
    let bcrypt = require('bcrypt');
    let saltRounds = 10;
    let salt = bcrypt.genSaltSync(saltRounds);
    dados.senha = bcrypt.hashSync(dados.senha, salt);

    let query = "insert into users (nome, email, senha) values(?, ? , ?)";
    this.connection.query(query, [dados.nome, dados.email, dados.senha], callback);
};

cadastroDAO.prototype.verifica_email_existente = function(email, callback) {
    let query = "select email from users where email = ?";
    this.connection.query(query, [email], callback);
};

cadastroDAO.prototype.verifica_email_existente_user = function(email, user_id, callback) {
    let query = "select email from users where email = ? and user_id != ?";
    this.connection.query(query, [email, user_id], callback);
};

cadastroDAO.prototype.dados_cadastro = function(dados, callback){
    let query = "select * from users where user_id = ?";
    this.connection.query(query, [dados], callback);
};

cadastroDAO.prototype.atualiza_dados_usuario_db = function(user_id, dados, callback){
    let query = "update users set nome = ?, email = ? where user_id = ?";
    this.connection.query(query, [dados.nome, dados.email, [user_id]], callback);
};

cadastroDAO.prototype.altera_senha = function(dados, callback){
    let query = "update users set senha = ? where user_id = ?";
    this.connection.query(query, [dados.senha, dados.user_id], callback);
};

module.exports = function() {
    return cadastroDAO;
};