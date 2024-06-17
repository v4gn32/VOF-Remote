import Database from './DbServices';

const DB_EXEC = Database.getConnection();

export const getMeasurements = async () => {
  let results;
  try {
    results = await DB_EXEC('SELECT * FROM measurements ORDER BY data DESC');
  } catch (error) {
    console.error("Error executing query: ", error);
    return [];
  }
  console.log(results);
  return results.rows._array;
};

export const insertMeasurement = async (param) => {
  let results;
  try {
    results = await DB_EXEC("INSERT INTO measurements(data, peso) VALUES(?,?)", [param.data, param.peso]);
    console.log('Inserted measurement: ' + results);
  } catch (error) {
    console.error("Error inserting measurement: ", error);
    return 0;
  }
  return results.rowsAffected;
};

export const updateMeasurement = async (param) => {
  let results;
  try {
    results = await DB_EXEC("UPDATE measurements SET data=?, peso=? WHERE id=?", [param.data, param.peso, param.id]);
    console.log('Updated measurement: ' + results);
  } catch (error) {
    console.error("Error updating measurement: ", error);
    return 0;
  }
  return results.rowsAffected;
};

export const deleteMeasurement = async (id) => {
  let results;
  try {
    results = await DB_EXEC("DELETE FROM measurements WHERE id=?", [id]);
    console.log('Deleted measurement: ' + results);
  } catch (error) {
    console.error("Error deleting measurement: ", error);
    return 0;
  }
  return results.rowsAffected;
};