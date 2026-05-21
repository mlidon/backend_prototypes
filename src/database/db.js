const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.sqlite', (error) => {
  if (error) {
    console.error('Error conectando con SQLite:', error.message);
    return;
  }

  console.log('Conectado correctamente a SQLite');
});

module.exports = db;