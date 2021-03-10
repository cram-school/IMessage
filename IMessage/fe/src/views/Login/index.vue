<style lang="less" scoped>
  .login {
    &-btn {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100vw;
    }
  }
</style>
<template>
  <div class="login">
    <CellGroup>
      <Field v-model="name" label="用户名" />
      <Field v-model="password" type="password" label="密码" />
    </CellGroup>

    <div class="login-btn">
      <Button type="primary" block @click="login">登录</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { Field, CellGroup, Button } from 'vant'
import { User } from '../../interface/index'
import { useRouter } from 'vue-router'

interface LocalUser extends User {
  password: string;
}

export default defineComponent({
  components: {
    Field,
    CellGroup,
    Button
  },
  setup() {
    const state = reactive({
      name: '',
      password: ''
    })
    const router = useRouter()

    const login = () => {
      /** */
      const randomNum = Math.ceil(Math.random()*1000)
      const { name, password } = state
      const localUser: LocalUser = {
        userId: Number(randomNum),
        password,
        name,
        avatar: randomNum % 2 === 0 ? 'https://pic1.zhimg.com/80/v2-512eb75224f41c30fd5b0416ae884c17_400x224.jpg?source=4e949a73' : 'https://pic2.zhimg.com/80/v2-d8ecedce01c1eaba9e0a9471a84ff19c_400x224.jpg?source=4e949a73'
      }
      localStorage.setItem('user', JSON.stringify(localUser))
      router.replace('/chat?name=Lokep')
    }

    return {
      ...toRefs(state),
      login
    }
  },
})
</script>
