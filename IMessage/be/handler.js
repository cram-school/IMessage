// interface User {
//   userId: string | number
//   name: string
//   avatar: string
// }

const { find } = require("lodash");

// interface SocketDTO {
//   event: string
//   from: User
//   to: User
//   content: string
// }

module.exports = (socket, io) => {
  const {
    to: {
      name
    }
  } = socket

  /**
   * 连接上
   */
  socket.on('login', socketDTO => {

  })

  /**
   * 收到消息的时候
   */
  socket.on('message', socketDTO => {
    //todo 将接收到的信息先进行持久化
    // 转发给用户
    for (let [key, value] of io.sockets.sockets) {
      if (value.handshake.query.reciever == 'hln') {
        value.emit('transport', socketDTO)
      }
      break
    }
  })

  /**
   * 业务服务
   */
  socket.on('/server', socketDTO => {

  })

  /**
   * 断开连接的时候
   */
  socket.on('disconnect', socketDTO => {

  })

}