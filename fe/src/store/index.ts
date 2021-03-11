import { useRoute } from 'vue-router'
import { createStore } from 'vuex'

export default createStore({
  state: {
    title: ''
  },
  mutations: {
    setTitle(state, payload) {
      const route = useRoute()
      state.title = payload.title ? payload.title : route.meta.title
    }
  },
  actions: {
  },
  modules: {
  }
})
