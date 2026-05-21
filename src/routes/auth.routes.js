const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');

const { register, login, profile } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, profile);


module.exports = router;