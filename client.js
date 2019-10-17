//frontend
//Make connection
var io = require('socket.io-client')
var socket = io.connect('http://54.153.13.140:4001');;
var ip = require('ip')



socket.on('ping', function(){
    //console.log('pinging');
});

socket.on('pong', function(ms){
    console.log(`Latency: ${ms}ms`);
});

setInterval(()=>{
    socket.emit('chat', { //grab the message emit the chat and send it to the server
        message: "hi",
        ip: ip.address(),
    });
}, 2000)
