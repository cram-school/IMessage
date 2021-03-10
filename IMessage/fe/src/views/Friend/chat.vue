<style lang="less" scoped>
  .conversation {
    overflow: hidden;
    background-color: #f5f6f7;
    height: calc(100vh - 46px);

    &-btn {
      box-sizing: content-box;
      margin-right: 10px;
      padding: 0 4px;
    }
  }
  .tool {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: #fff;
    height: 44px;
    justify-content: space-between;

    &-ipt {
      height: 28px;
      width: 70%;
      display: block;
      margin: 0 10px;
      padding: 4px 8px;
      border: 0;
      border-radius: 5px;
      background-color: #f5f6f7;
      flex: 1;
    }
  }
</style>

<template>
  <div class="conversation">
    <Bubble v-for="(item, index) in list" :key="index"  :content="item.content" :avatar="item.from.avatar" :direction="item.direction"/>

    <div class="tool align-center">
      <input class="tool-ipt" v-model="words" @keydown.enter="sendMsg"/>
      <Button class="conversation-btn" icon="edit" type="primary" size="small" @click="sendMsg">发送</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { io, Socket } from "socket.io-client"
import { reactive, toRefs } from '@vue/reactivity'
import { onBeforeMount, onBeforeUnmount, onMounted } from '@vue/runtime-core'
import { LocationQueryValue, useRoute, useRouter } from 'vue-router'
import Bubble from '../../components/Bubble/index.vue'
import { Button, Toast } from 'vant'
import { useStore } from 'vuex'
import { WS } from '../../utils/constant'

interface User {
  userId: string | number;
  name: string;
  avatar: string;
}

interface SocketDTO {
  event: string;
  from: User;
  to: User;
  content: string;
  direction?: boolean;
}

function makeUpSocketDTO(event: string, to: User, content: string): SocketDTO {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}')
  return {
    event,
    from: user,
    to,
    content
  }
} 
export default {
  components: {
    Bubble,
    Button
  },
  setup() {
    const list: SocketDTO[] = []
    const state = reactive({
      words: '',
      list
    })
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const user: User = JSON.parse(localStorage.getItem('user') || '{}')
    const socket: Socket = io(WS(), {
      transports: ['websocket'],
      auth: {
        token: user.userId
      },
      query: {
        name: user.name
      }
    })

    // 若本地用户信息不存在，则需要重新登录
    if (Object.keys(user).length <= 0) {
      Toast.fail('登录失效')
      router.replace('/login')
    }
    
    const name: LocationQueryValue = JSON.stringify(route.query.name)
    const sendMsg = (): void => {
      const message: SocketDTO = makeUpSocketDTO('message', {name: name || '', userId: '1232', avatar: ''}, state.words)
      socket.emit('message', message)
      state.words = ''
      state.list.push({...message, direction: true})
    }

    onBeforeMount(() => {
      route.meta.title = '正在输入中...'
      store.commit({
        type: 'setTitle',
        title: route.query.name
      })
    })
    onMounted(() => {
      
      socket.on('login', (data: string) => {
        Toast.success(data)
      })

      socket.on('transport', (data: SocketDTO) => {
        console.log(data)
        state.list.push({...data, direction: false})
      })

    })

    onBeforeUnmount(() => {
      socket.close()
    })

    return {
      ...toRefs(state),
      sendMsg,
      user: JSON.stringify(user)
    }
  }
}

</script>