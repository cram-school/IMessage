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

      .nickName {
        font-size: 14px;
      }
      .record-message {
        font-size: 12px;
        color: #a5a7a9;
        max-width: 20em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
      }
    }
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #fff;
    flex-shrink: 0;
    overflow: hidden;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
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
        <div class="avatar">
          <img src="https://pic4.zhimg.com/80/v2-a19bdaa196acda9e3e758d35db0034e2_400x224.jpg?source=4e949a73" alt="头像">
        </div>
        <div class="record-content">
          <div class="nickName align-center">
            {{item.name}}
            <Badge style="margin-left: 5px" :content="20" />
          </div>
          <div class="record-message">{{item.message}}</div>
        </div>
        <div class="record-time">{{item.time}}</div>
      </div>
    </List>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from '@vue/reactivity'
import { List, Badge } from 'vant'
import moment from 'moment'

export default {
  components: {
    List,
    Badge
  },
  setup() {
    const state = reactive({
      error: true,
      loading: false,
      list: new Array(20).fill({ name: 'Lokep', message: Math.floor(Math.random()*1000), time: moment().format('MM-DD') })
    })

    // onMounted(() => {
    // })

    return {
      ...toRefs(state)
    }
  }
}
</script>

