import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('app.db');

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS Usuario (
        UsuarioID INTEGER PRIMARY KEY AUTOINCREMENT,
        Nome TEXT,
        Email TEXT UNIQUE NOT NULL,
        Senha TEXT NOT NULL,
        Altura REAL CHECK (Altura > 0),
        Idade INTEGER CHECK (Idade > 0),
        Sexo TEXT CHECK (Sexo IN ('M', 'F', 'O')),
        Peso REAL CHECK (Peso > 0)
      );
    `);

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Historico (
        HistoricoID INTEGER PRIMARY KEY AUTOINCREMENT,
        UsuarioID INTEGER,
        DataRegistro DATE NOT NULL,
        Peso FLOAT CHECK (Peso > 0),
        IMC FLOAT CHECK (IMC > 0),
        FOREIGN KEY (UsuarioID) REFERENCES Usuario(UsuarioID) ON DELETE CASCADE
      );`,
    );
  });
};

export const getDb = () => db;