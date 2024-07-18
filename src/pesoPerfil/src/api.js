import { getDb } from './database';

export const getUserDataFromDatabase = (userId) => {
  return new Promise((resolve, reject) => {
    const db = getDb();
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Usuario WHERE UsuarioID = ?',
        [userId],
        (_, { rows }) => {
          if (rows.length > 0) {
            const userData = rows.item(0);
            resolve(userData);
          } else {
            reject(new Error('Usuário não encontrado no banco de dados'));
          }
        },
        (_, error) => {
          reject(new Error(`Erro ao buscar dados do usuário: ${error.message}`));
        }
      );
    });
  });
};
