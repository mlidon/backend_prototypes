const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const env = require('./config/env');
require('./database/init');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Backend funcionando correctamente' });
});



app.listen(env.port, () => {
  console.log(`Servidor iniciado en http://localhost:${env.port}`);
});