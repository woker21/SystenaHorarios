const sqlite3 = require('sqlite3').verbose();

const DB_PATH = './data/database.db';

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Connected to the SQLite database.');
});

module.exports = db;
