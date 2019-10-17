//Server
var express = require('express');
var socket = require('socket.io') //defining socket,io
var port = 4001;
var ip = require('ip')
//App setup
var app = express();
var server = app.listen(port, ip.address(), function(){
  console.log('listening to requests on port 4000,');
});

// Static files using middleware
// app.use(express.static('public')); //this app servers whatever is inside public folder to the browser

//Socket setup
var io = socket(server); //socket.io will work on the 'server'

io.on('connection', function(socket) { //awaiting for connection, every client has its own socket
    console.log('made socket connection',socket.id) //checking the socket id

    socket.on('chat', function(data){ //listening to all sockets when chat is received, pass it to the function
        console.log(data);
        // io.sockets.emit('chat', data); //grab all the sockets and emit the chat message to all different clients
    });

    // socket.on('typing', function(data){
    //     socket.broadcast.emit('typing', data)
    // });
});

//app.listen(port, ip.address(), () => console.log(`Port ${port}!, ${ip.address()}`))

