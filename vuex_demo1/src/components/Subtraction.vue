<template>
  <div>
    <!-- <h3>当前最新的count值为：{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="subN(3)">-N</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNAsync(5)">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    // 将全局共享的数据映射为该组件的计算属性  使用哪个数据就填写哪个数据的名字
    ...mapState(['count']),
    // 将getters中加工的数据映射为该组件的计算属性  使用哪个数据就填写哪个数据的名字
    ...mapGetters(['showNum'])
  },
  methods: {
    // 将mutations 中的函数映射为组件中的方法  等同于在组件中写的方法，可以直接调用
    ...mapMutations(['sub', 'subN']),
    // 将actions 中的函数映射为组件中的方法  等同于在组件中写的方法，可以直接调用
    ...mapActions(['subAsync', 'subNAsync']),

    btnHandler1() {
      // 直接调用映射过来的函数
      this.sub()
    }
  }
}
</script>