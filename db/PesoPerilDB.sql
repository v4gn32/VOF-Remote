-- Criação do banco de dados PesoPerfil
CREATE DATABASE PesoPerfilDB;

-- Conexão ao banco de dados criado
\c PesoPerfilDB

-- Criação da tabela 'Usuario'
CREATE TABLE Usuario (
    UsuarioID SERIAL PRIMARY KEY,
    Nome VARCHAR(255),
    Email VARCHAR(255) UNIQUE NOT NULL,
    Senha VARCHAR(255) NOT NULL,
    Altura FLOAT CHECK (Altura > 0),
    Idade INT CHECK (Idade > 0),
    Sexo CHAR(1) CHECK (Sexo IN ('M', 'F', 'O')), -- M = Masculino, F = Feminino, O = Outro
);

-- Criação da tabela 'Historico'
CREATE TABLE Historico (
    HistoricoID SERIAL PRIMARY KEY,
    UsuarioID INT REFERENCES Usuario(UsuarioID) ON DELETE CASCADE,
    DataRegistro DATE NOT NULL,
    Peso FLOAT CHECK (Peso > 0),
    IMC FLOAT CHECK (IMC > 0)
);

-- Criação da tabela 'Classificacao'
CREATE TABLE Classificacao (
    ClassificacaoID SERIAL PRIMARY KEY,
    Descricao VARCHAR(255),
    IMCMin FLOAT CHECK (IMCMin >= 0),
    IMCMax FLOAT CHECK (IMCMax >= IMCMin)
);
