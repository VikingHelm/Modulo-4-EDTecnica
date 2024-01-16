require('dotenv').config();
const express = require('express');
const app = express(); // Crea una nueva aplicación 'express' en la variable 'app'

// Mongoose
const mongoose = require('mongoose');
const port = process.env.PORT  || 5000;

app.listen(port, ()=>console.log('Server listening on port:', port))

app.get('/', (req,res)=>{
    res.send('Bienvenido al servidor.');

})

// Conexión a MongoDB
mongoose.connect(process.env.mongo_uri)
.then(()=>console.log('Te has conectado a MongoDB.'))
.catch((error)=>console.log(error));