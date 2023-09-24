module.exports = (http) => {
    const io = require('socket.io')(http,{
        // cors: {
        //     // origin: ["http://localhost:5173"],
        //     origin: "*",
            
        // }
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
            transports: ['websocket', 'polling'],
            credentials: true
        },
        allowEIO3: true
    });

    io.on('connection', (socket) => {
        console.log('User connected.');

        socket.on('chat-message', (msg) => {
            console.log(msg);
            io.emit('chat-message', msg);
        });

        socket.on('my broadcast', (msg) => {
            io.emit('chat-message', msg);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected.');
        });
    });
}