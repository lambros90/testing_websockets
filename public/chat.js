//frontend
//Make connection
var socket = io.connect('http://localhost:4000');

//Query Dom
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function(){ //listening for event
    socket.emit('chat', { //grab the message emit the chat and send it to the server
        message: message.value,
        handle: handle.value
    });
    message.value ="";
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
});

//Listen for events
socket.on('chat', function(data){ //listening to chat message from server
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'; //output the data here
});

socket.on('typing', function(data){ //listening to typing events from server
    feedback.innerHTML ='<p><em>' + data + ' is typing a message...</em></p>';
});
