const express = require('express');
const router = express.Router();
const { registerUser } = require('../../controllers/user.controller');
const encryptPassword = require('../../middleware/encryptPassword'); // Asegúrate de que la ruta es correcta

router.post('/register', encryptPassword, registerUser);


module.exports = router;
