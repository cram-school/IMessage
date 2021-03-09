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

  /**
  * 当用户连接上时，获取生成的socket对象，并且获取对象的auth或query字段，讲对应字段存入数据库中
  * console.log(socket.handshake.auth)
  * console.log(socket.handshake.query)
  */


  /**
  * 罗列socket监听的事件
  * socket.on('eventName', handler)
  * 
  * 可以拆分文件进行管理，例如 onHandler(socket)
  */



  /**
  * 包括对应需要向客户端发送的事件
  * 1. 聊天（此处最好可以区分私聊，群聊，并且解析发送的消息内容，例如发送的内容中包含图片或视频，应在客户端先做上传操作）
  * 2. 通过服务向客户端发送消息，例如点赞，评论等
  * 
  * 可以拆分文件进行管理，例如 onEmit(socket)
  */
  

})

server.listen(PORT, () => console.log('server is running at ' + PORT))
