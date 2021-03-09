<style lang="less">
  .chat {
    &-list {
      padding: 10px 5px;
    }
  }
  .record {
    padding: 10px 10px;

    &-content {
      flex: 1;
    }
  }

</style>
<template>
  <div class="container">
    
    <List
      v-model:loading="loading"
      v-model:error="error"
    >
      <div class="align-center record" v-for="(item, index) in list" :key="index"  >
        <Icon size="36" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        <div class="record-content">
          <div class="nickName">{{item.name}}</div>
          <div class="record-message">{{item.message}}</div>
        </div>
        <div class="record-time">{{item.time}}</div>
      </div>
    </List>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/reactivity'
import { List, Icon } from 'vant'

export default {
  components: {
    List,
    Icon
  },
  setup() {
    const state = reactive({
      error: true,
      loading: false,
      list: new Array(20).fill({ name: 'Lokep', message: Math.floor(Math.random()*1000), time: new Date() })
    })

    // onMounted(() => {
    // })

    return {
      ...toRefs(state)
    }
  }
}
</script>

