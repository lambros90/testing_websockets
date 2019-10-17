//frontend
//Make connection
var io = require('socket.io-client')
var socket = io.connect('http://localhost:4000');


setInterval(()=>{
    socket.emit('chat', { //grab the message emit the chat and send it to the server
        message: "hi",
    });
}, 2000)
