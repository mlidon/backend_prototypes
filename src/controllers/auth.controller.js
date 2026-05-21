const bcrypt = require('bcrypt');
const User = require('../models/user.model');
// Control jsonwebtoken
const jwt = require('jsonwebtoken');
const env = require('../config/env');


// --- Registro --- 
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Name, email y password son obligatorios'
      });
    }

    User.findByEmail(email, async (error, existingUser) => {
      if (error) {
        return res.status(500).json({
          message: 'Error buscando usuario'
        });
      }

      if (existingUser) {
        return res.status(409).json({
          message: 'El email ya está registrado'
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = {
        name,
        email,
        password: hashedPassword
      };

      User.create(newUser, (error, userCreated) => {
        if (error) {
          return res.status(500).json({
            message: 'Error creando usuario'
          });
        }

        return res.status(201).json({
          message: 'Usuario registrado correctamente',
          user: userCreated
        });
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
};


// --- Login ---
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email y password son obligatorios'
      });
    }

    User.findByEmail(email, async (error, user) => {
      if (error) {
        return res.status(500).json({
          message: 'Error buscando usuario'
        });
      }

      if (!user) {
        return res.status(401).json({
          message: 'Credenciales inválidas'
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({
          message: 'Credenciales inválidas'
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        env.jwtSecret,
        {
          expiresIn: '1h'
        }
      );

      return res.status(200).json({
        message: 'Login correcto',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
};

// --- Profile ---
const profile = (req, res) => {
  return res.status(200).json({
    message: 'Ruta protegida accedida correctamente',
    user: req.user
  });
};


module.exports = {
  register,
  login,
  profile
};