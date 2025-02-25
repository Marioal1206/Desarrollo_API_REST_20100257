const express = require("express");
const xmlparser = require("express-xml-bodyparser");
const multer = require("multer");
const path = require("path");
const app = express();

// Middleware para parsear application/x-www-form-urlencoded (FORM DATA NORMAL)
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Para recibir JSON
app.use(express.text()); // Para recibir texto
app.use(xmlparser()); // Para recibir XML

// Configuración de Multer (SOLO para archivos)
const folder = path.join(__dirname, '/archivos/');
const upload = multer({ dest: folder });

// 🚀 RUTA para recibir FORMULARIOS (application/x-www-form-urlencoded)
app.post('/usuarioTexto', (req, res) => {
    console.log(req.body);
    res.send('Se recibió el formulario: ' + JSON.stringify(req.body));
});

// 🚀 RUTA para recibir ARCHIVOS (multipart/form-data)
app.post('/usuarioArchivo', upload.single('archivo'), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No se recibió ningún archivo.");
    }
    console.log(`Se recibió el archivo: ${req.file.originalname}`);
    console.log(req.body);
    res.json({ mensaje: "Archivo recibido", archivo: req.file.originalname, datos: req.body });
});

app.post("/prefecto", (req, res) => {
    console.log(req.body); // Ver la estructura del XML convertido a JSON

    res.json({ mensaje: "XML recibido", data: req.body });
});


// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).send("Error 404 - Página no encontrada");
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});