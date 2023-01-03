import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义全局共享的数据
  state: {
    count: 0
  },
  // 只有 mutations 中定义的函数，才有权利修改 state 中的数据
  mutations: {
    // 传参 state对象传入
    add(state) {
      // 不要在 mutations 函数中，执行异步操作
      // setTimeout(() => {
      //   state.count++
      // }, 1000)
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  // actions 用于异步处理(箭头函数等)
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据；
        // 必须通过 context.commit() 触发某个 mutation 才行
        // 必须传参数 context 调用 commit函数
        context.commit('add')
      }, 1000)
    }, 
    // 异步任务携带参数 
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  // getter 用于对Store中的数据进行加工处理形成新的数据
  // getter 不会修改store中的原数据
  // Store 中的数据发生变化 getter中的数据也会跟着变化
  getters: {
    showNum(state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
