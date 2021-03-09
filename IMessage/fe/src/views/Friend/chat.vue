<style lang="less" scoped>
  .conversation {

  }
</style>

<template>
  <div class="conversation">
    
  </div>
</template>

<script lang="ts">
import { io } from "socket.io-client"
import { reactive, toRefs } from '@vue/reactivity'
import { onBeforeUnmount, onMounted } from '@vue/runtime-core'
  export default {
    setup() {
      const state = reactive({

      })

      let socket: any = io('http://localhost:3000', {
        transports: ['websocket'],
        auth: {
          token: 'i am lokep'
        },
        query: {
          name: 'lokep',
          reciever: 'hln'
        }
      })
      onMounted(() => {
        socket.on('message', (data: string) => {
          console.log(data)
        })

        // socket.emit('sendMsg', { time: new Date() })
      })

      onBeforeUnmount(() => {
        socket = {}
      } )

      return {
        ...toRefs(state)
      }
    }
  }
</script>