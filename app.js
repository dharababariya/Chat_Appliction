const express = require('express');
const socket = require('Socket.io')


//App setup
const app = express();

const server = app.listen(4000,()=>{console.log('listn port 4000')});

//static file

app.use(express.static('public'));

//socket setup

const io = socket(server);

io.on('connection', (socket)=>{
    console.log('create socket connection',socket.id);

    socket.on('chat', function(data){
        io.emit('chat',data);
    })
})