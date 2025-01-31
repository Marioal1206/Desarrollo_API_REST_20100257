const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
    //res.send('¡Hola, mundo!');
});

app.listen(4000, () => {
    console.log('Servidor corriendo en http://localhost:4000');
});