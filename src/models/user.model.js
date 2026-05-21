const db = require('../database/db');

const User = {
  findByEmail(email, callback) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.get(sql, [email], callback);
  },

  create(user, callback) {
    const sql = `
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
    `;

    db.run(sql, [user.name, user.email, user.password], function (error) {
      callback(error, {
        id: this?.lastID,
        name: user.name,
        email: user.email
      });
    });
  }
};

module.exports = User;