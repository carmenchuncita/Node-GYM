const jwt = require('jsonwebtoken');

const createToken = (info) => {
  const data = {
    user_id: info._id,
    user_email: info.email,
  };
  return jwt.sign(data, process.env.JWT_SECRET);
};

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  // No token, unauthorized
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // Invalid token
      if (err) return res.sendStatus(403); 
      req.user = user;
      next();
  });
}

module.exports = { createToken, authenticateToken };