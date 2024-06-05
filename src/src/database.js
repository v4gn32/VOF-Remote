import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('app.db');

export const createTable = () => {
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
  });
};

export const getDb = () => db;