<style lang="less" scoped>
  .record {
    margin: 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    
    &.oppsite {
      flex-direction: row;
    }
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #fff;
    flex-shrink: 0;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .bubble {
    max-width: 20em;
    background-color: #fff;
    border-radius: 6px;
    margin: 2.5px 10px;
    
    div {
      padding: 10px;
      word-break: break-all;
      line-height: 20px;
    }

    img {
      display: block;
      border-radius: 4px;
      max-width: 20em;
    }
  }

</style>
<template>
  <div class="record oppsite" v-if="!direction">
    <div class="avatar">
      <img :src="avatar" alt="头像">
    </div>
    <div class="bubble self">
      <!-- <img :src="avatar" alt=""> -->
      <div>
        {{content}}
      </div>
    </div>
  </div>
  <div class="record" v-else>
    <div class="avatar">
      <img :src="avatar" alt="头像">
    </div>
    <div class="bubble self">
      <div>
        {{content}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive } from '@vue/reactivity'
import { Prop } from '@vue/runtime-core'

export default {
  props: {
    avatar: {
      type: String,
      default: 'https://avatars.githubusercontent.com/u/23396812?s=60&v=4'
    },
    content: {
      type: String,
      default: '你好啊，好久不见'
    },
    direction: {
      type: Boolean,
      default: true // 默认为自己发送，false为接收到到消息
    }
  },
  setup(props: any): object {
    console.log(props.direction)
    return {

    }
  },
}
</script>
