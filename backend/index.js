const http=require('http')
const express=require('express')
const socketio=require('socket.io')

const app=express()

const server=http.createServer(app)
const io=socketio(server,{
    cors:{
        origin:'*'
    }
})
const PORT=5000

//run when client connects
io.on('connection',socket=>{
    console.log("new WS connection");
    socket.emit('message','hello')
})

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
