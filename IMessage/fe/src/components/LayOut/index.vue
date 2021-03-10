<style lang="less" scoped>

</style>
<template>
  <NavBar
    v-if="navBar"
    :title="title"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="clickLeft"
    @click-right="clickRight"
  />
  <router-view />
</template>
<script lang="ts">
import { reactive, ref, toRefs } from '@vue/reactivity'

import { NavBar } from 'vant'
import { useRoute, useRouter } from 'vue-router'
import { computed, defineComponent, onMounted, watchEffect } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default defineComponent({
  
  components: {
    NavBar
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { navbar = true } = route.meta
    const store = useStore()
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
      
    })

    const title = computed(() => store.state.title)
    console.log(store)
    return {
      ...toRefs(state),
      title,
      clickLeft,
      clickRight
    }
  }
})
</script>
