const express = require('express');
const router = express.Router();
const encryptPassword = require('../../middleware/encryptPassword');
const {
  registerUser,
  loginUser,
  // profileUser
} = require('../../controllers/user.controller');

router.post('/register', encryptPassword,registerUser);
router.post('/login', loginUser);
// router.get('/profile', profileUser);


module.exports = router;
