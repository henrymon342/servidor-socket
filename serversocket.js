const http = require('http');
const server = http.createServer((req, res) => {
    // Configura tu servidor HTTP como desees
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket.on('mensaje', (data) => {
        console.log('Mensaje recibido: ' + data);
        // Puedes emitir mensajes a todos los clientes o realizar otras acciones aquí
    });
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor de sockets escuchando en el puerto 3000');
});