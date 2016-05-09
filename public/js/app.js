/**
 * Created by codymiller on 5/8/16.
 */
var socket = io();

socket.on('connect', function(){
    console.log('Connected on client');
});

socket.on('message', function(message){
    console.log(message.text);
})
