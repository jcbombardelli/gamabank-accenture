CREATE SCHEMA if not exists `gamabank`;
USE gamabank;

CREATE TABLE if not exists Usuario(
	id INT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(200) NOT NULL,
    telefone VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE if not exists Conta(
	id INT AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    saldo DOUBLE,
    dateAbertura DATE NOT NULL,
    dateEncerramento DATE,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id),
    PRIMARY KEY (id)
 );
 
 CREATE TABLE if not exists Credito( 
	idConta INT NOT NULL,
    limite DOUBLE NOT NULL,
    limiteDisponivel DOUBLE NOT NULL,
    FOREIGN KEY (idConta) REFERENCES Conta(id)
 );
 
 CREATE TABLE if not exists Fatura(
	id INT AUTO_INCREMENT NOT NULL,
    idConta INT NOT NULL,
    status VARCHAR(200) NOT NULL,
    diaFechamento INT NOT NULL,
    diaVencimento INT NOT NULL,
    mesReferencia INT NOT NULL,
    valorConsolidado DOUBLE NOT NULL,
    valorPago DOUBLE NOT NULL,
    FOREIGN KEY (idConta) REFERENCES Conta(id),
    PRIMARY KEY (id)
 );
 
 CREATE TABLE if not exists DetalheFatura(
	id INT NOT NULL,
    idFatura INT NOT NULL,
    data DATE NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    valor DOUBLE NOT NULL,
    FOREIGN KEY (idFatura) REFERENCES Fatura(id),
    PRIMARY KEY (id)
 );
 
 CREATE TABLE if not exists Transacoes(
	id INT NOT NULL AUTO_INCREMENT,
    idConta INT NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    valor DOUBLE NOT NULL,
    FOREIGN KEY (idConta) REFERENCES Conta(id),
    PRIMARY KEY (id)
 );
 
 
 
 