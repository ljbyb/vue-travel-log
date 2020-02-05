import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: 12
  },
  mutations: {
    // 更新消息状态
    updateMessages (state, count) {
      state.messages = count
    }
  },
  actions: {
    updateMessages ({ commit }, count) {
      commit('updateMessages', count)
    }
  },
  modules: {
  }
})
