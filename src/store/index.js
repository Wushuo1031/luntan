import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenInfo: {
      token: '',
      refresh_token: ''
    }
  },
  mutations: {
    // 用来修改tokeninfo的方法
    updateTokenInfo (state, paylode) {
      state.tokenInfo = paylode
      localStorage.setItem('state', JSON.stringify(state))
    }
  },
  actions: {
  },
  modules: {
  }
})
