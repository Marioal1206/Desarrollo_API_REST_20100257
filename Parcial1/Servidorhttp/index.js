const http = require('http');//importamos la libreria http

const hostname = '127.0.0.1';// esta direccion apunta hacia nuetro propio equipo
const port = 3000;//guardamos el puerto por donde querramos que nuetro servidor corra

const server = http.createServer((req, res) => {// se crea el servidor req represeta la peticion y res representa la respuesta del servidor 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.statusCode = 200;// indicamos que la respuesta es satisfactoria 
    res.setHeader('Content-Type', 'text/plain');//indicamos que la respuesta sera en texto plano
    res.end('¡Hola, mundo! Servidor HTTP en Node.js\n');// mandamos la respuesta del servidor y cerramos el enlace 
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});