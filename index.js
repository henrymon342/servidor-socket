const WebSocket = require('ws');

// Crea un servidor HTTP tradicional
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Servidor HTTP en ejecución.\n');
});

var cors = require('cors');

// use it before all route definitions
server.use(cors({origin: 'http://localhost:5173'}));

// Crea un servidor WebSocket que escuche en el mismo puerto que el servidor HTTP
const wss = new WebSocket.Server({ server });

// Maneja las conexiones WebSocket
wss.on('connection', (ws) => {
  console.log('Nueva conexión WebSocket establecida.');

  // Maneja los mensajes WebSocket entrantes
  ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);

    // Envía un mensaje de respuesta al cliente
    ws.send(`Servidor: Recibí tu mensaje: ${message}`);
  });

  // Maneja la desconexión del cliente
  ws.on('close', () => {
    console.log('Conexión WebSocket cerrada.');
  });
});

// Inicia el servidor HTTP y WebSocket
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP y WebSocket en ejecución en el puerto ${PORT}`);
});
