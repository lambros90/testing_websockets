//frontend
//Make connection
var io = require('socket.io-client')
var socket = io.connect('http://35.223.144.30:4001');
var ip = require('ip')


setInterval(()=>{
    socket.emit('chat', { //grab the message emit the chat and send it to the server
        message: "hi",
        ip: ip.address(),
    });
}, 2000)
