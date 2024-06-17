import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('pesoperfil_database.db');

const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS measurements (id INTEGER PRIMARY KEY NOT NULL, data TEXT NOT NULL, peso REAL NOT NULL);',
      [],
      () => { console.log("Table created successfully"); },
      (tx, error) => { console.log("Error creating table: " + error.message); }
    );
  });
};

const ExecuteQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.transaction((trans) => {
      trans.executeSql(
        sql,
        params,
        (trans, results) => {
          resolve(results);
        },
        (trans, error) => {
          reject(error);
        }
      );
    });
  });

export const Database = {
  getConnection: () => {
    createTable();
    return ExecuteQuery;
  },
};

export default Database;