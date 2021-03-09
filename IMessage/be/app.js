const http = require('http')

const express = require('express')
const socketIO = require('socket.io')
const app = express()

app.all('*', function(req, res, next) {
  //设为指定的域
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});


const server = http.createServer(app)

const io = socketIO(server, { transports: ['websocket'] })

const PORT = 3000 || process.env.PORT

app.get('/socket', (req,res) => {
  res.end('hello')
})



io.on('connection', socket => {
  console.log(socket.handshake.auth.token)
  console.log(socket.handshake.query.reciever)

  socket.emit('message', 'welcome to Lokep`s')

  socket.on('/message', socket => {
    console.log(socket)
  })

  socket.on('sendMsg', (data) => {
    console.log(data)
    //给所有用户发送
      sockets.emit('setId', {id: '1234567'})
      //给当前用户发送
      //socket.emit('setId', { id: '123456' })
  })
})

server.listen(PORT, () => console.log('server is running at ' + PORT))
