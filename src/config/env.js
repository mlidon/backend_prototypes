require('dotenv').config();

const env = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET
};

module.exports = env;