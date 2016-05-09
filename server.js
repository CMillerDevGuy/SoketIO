/**
 * Created by codymiller on 5/8/16.
 */
var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
    
    socket.on('message', function(message){
        console.log('Message received');
        
        socket.broadcast.emit('message', message);
    })
    
    socket.emit('message', {
        text: 'welcome to chat'
    });
    console.log('User connected');
});

http.listen(PORT, function(){
    console.log('App running on port ' + PORT);
});