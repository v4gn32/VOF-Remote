import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myDatabase.db');

export const iniciaTabelaBanco = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Usuario (
        UsuarioID INTEGER PRIMARY KEY AUTOINCREMENT,
        Nome TEXT,
        Email TEXT UNIQUE NOT NULL,
        Senha TEXT NOT NULL,
        Altura REAL CHECK (Altura > 0),
        Idade INTEGER CHECK (Idade > 0),
        Sexo TEXT CHECK (Sexo IN ('M', 'F', 'O')),
        Peso REAL CHECK (Peso > 0)
      );`,
      [],
      () => console.log('Tabela Usuario criada com sucesso.'),
      (tx, error) => {
        console.error('Erro ao criar tabela Usuario:', error);
        return true;
      }
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Historico (
        HistoricoID INTEGER PRIMARY KEY AUTOINCREMENT,
        UsuarioID INTEGER REFERENCES Usuario(UsuarioID) ON DELETE CASCADE,
        DataRegistro DATE NOT NULL,
        IMC FLOAT CHECK (IMC > 0)
      );`,
      [],
      () => console.log('Tabela Historico criada com sucesso.'),
      (tx, error) => {
        console.error('Erro ao criar tabela Historico:', error);
        return true; 
      }
    );
  }, (error) => {
    console.error("Erro ao inicializar o banco de dados: ", error);
  }, () => {
    console.log("Banco de dados inicializado com sucesso");
  });
};

export const getDb = () => {
  return db;
};
