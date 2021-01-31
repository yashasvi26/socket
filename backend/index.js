const app = require('express')();
const http = require('http').Server(app);
const cors = require('cors');
app.use(cors());
const io = require('socket.io')(http, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

const port = 5000;

io.on('connection', (socket)=>{
  socket.on('message', ({name, message})=>{
    io.emit('message', {name, message});
  })
})

app.listen(port, ()=>{
    console.log(`Running Server on port:${port}`);
})



