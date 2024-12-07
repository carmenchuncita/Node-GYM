const express = require('express');
const router = express.Router();
const {
  registerUser,
  getUsers,
} = require('../../controllers/user.controller');

router.post('/register', registerUser);
router.get('/listusers', getUsers);


module.exports = router;
