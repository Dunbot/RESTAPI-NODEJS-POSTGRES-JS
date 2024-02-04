// Guardamos el modulo en una constante
const express = require('express');
// ejecutamos en una constante app
const app = express();
//middlewares para procesar json
app.use(express.json());
app.use(express.urlencoded({extended: false})); //Para formularios, extended false es para datos simples




//exportamos rutas
app.use(require('./routes/index'));
//escuchamos
app.listen(3000);
console.log('Servidor en puerto 3000');