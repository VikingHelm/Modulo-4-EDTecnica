const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    cedula: String
});

const User = mongoose.model('User', usuarioSchema);

module.exports = User;