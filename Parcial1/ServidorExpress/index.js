const express = require('express');
const path = require('path'); // Módulo para manejar rutas
const app = express();

// Middleware de aplicación
app.use('/', (req, res, next) => {
    console.log("Petición al servidor");
    next();
}, (req, res, next) => {
    console.log("Segunda petición");
    next();
});

// Middleware incorporado en Express
app.use(express.json());  // Para recibir JSON en el body
app.use(express.text());  // Para recibir texto plano en el body

// Servir archivo HTML en la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint POST corregido
app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Hola mundo desde POST");
});

// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).send("Error 404 - Página no encontrada");
});

// Iniciar servidor
app.listen(4000, () => {
    console.log('Servidor corriendo en http://localhost:4000');
});