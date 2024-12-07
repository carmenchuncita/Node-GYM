const Users = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../utils/jwt'); 

const registerUser = async (req, res) => {
  const { email, password, name, birth, role } = req.body; 

  try {
    //Check if the user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'El correo electrónico ya está registrado' });
    }

    const newUser = new Users({
      name,
      email,
      password,  
      birth,
      role
    });

    const createdUser = await newUser.save();
    return res.status(201).json({ message: 'Usuario creado con éxito', data: createdUser });
  } catch (error) {
    console.log(error);
    
    if (error.code === 11000) {
      return res.status(409).json({ message: 'El correo electrónico ya está en uso' });
    }
    return res.status(500).json({ message: 'Error al registrar el usuario', error: error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await Users.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ message: "Contraseña incorrecta" });
      }

      const token = createToken(user);
      res.json({
          message: "Inicio de sesión exitoso",
          token,
          user: {
              id: user._id,
              email: user.email,
              name: user.name
          }
      });
  } catch (error) {
      console.error(error);  
      res.status(500).json({ message: "Error al procesar la solicitud", error: error.message });
  }
};

module.exports = { registerUser,loginUser };
