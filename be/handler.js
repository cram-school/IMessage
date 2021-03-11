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
    //todo 应用roomID进行区分

    const socketCollection = io.sockets.sockets
    socketCollection.forEach(item => {
      console.log('"'+item.handshake.query.name + '"', socketDTO.to.name)
      if ('"'+item.handshake.query.name+'"' == socketDTO.to.name) {
        item.emit('transport', socketDTO)
      }
    })
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