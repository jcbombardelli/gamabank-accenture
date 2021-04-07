class User {
  constructor({ nome, cpf, email, senha, salt, telefone }) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
    this.salt = salt;
  }
}

module.exports = User;
