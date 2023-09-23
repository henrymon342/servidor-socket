module.exports = (http) => {
    const io = require('socket.io')(http,{
        cors: {
            // origin: ["http://localhost:5173"],
            origin: ["*"],
            methods: ['GET','POST','DELETE','UPDATE','PUT']
          }
    });

    io.on('connection', (socket) => {
        console.log('User connected.');

        socket.on('chat-message', (msg) => {
            io.emit('chat-message', msg);
        });

        socket.on('join', function(userNickname) {
            console.log(userNickname +" : has joined the chat "  )
            socket.broadcast.emit('userjoinedthechat',userNickname +" : has joined the chat ")
        });

        socket.on('disconnect', () => {
            console.log('User disconnected.');
        });

        socket.on('my message', (msg) => {
            console.log('message: ' + msg);
            io.emit('my broadcast', `server: ${msg}`);
          });
    });
}