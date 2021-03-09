<style lang="less" scoped>

</style>
<template>
  <NavBar
    v-if="navBar"
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="clickLeft"
    @click-right="clickRight"
  />
  <router-view />
</template>
<script lang="ts">
import { reactive, toRefs } from '@vue/reactivity'

import { NavBar } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'

export default {
  components: {
    NavBar
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { navbar = true } = route.meta
    const state = reactive({
      navBar: navbar,
    })

    const clickLeft = () => { 
      /** */
      if (route.path != '/index') {
        router.go(-1)
      }

    }
    const clickRight = () => {/** */}

    onMounted(() => {
      /** */
      // state.navBar = route.meta.navbar
    })

    return {
      ...toRefs(state),
      clickLeft,
      clickRight
    }
  }
}
</script>
