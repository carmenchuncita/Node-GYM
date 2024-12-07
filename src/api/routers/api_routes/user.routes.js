const express = require('express');
const router = express.Router();
const encryptPassword = require('../../middleware/encryptPassword');
const { authenticateToken } = require('../../../utils/jwt'); 
const {
  registerUser,
  loginUser,
  profileUser
} = require('../../controllers/user.controller'); 
// We use encryptPassword to secure the password before saving
router.post('/register', encryptPassword, registerUser);
// Does not use authenticateToken because the token is generated here
router.post('/login', loginUser);
// We use authenticateToken to ensure it is a logged in user
router.get('/profile', authenticateToken, profileUser);

module.exports = router;
