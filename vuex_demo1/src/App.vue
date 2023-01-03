<template>
  <div>
    <!-- 使用该组件注册的组件 -->
    <my-addition></my-addition>

    <p>---------------------------------</p>

    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'

export default {
  data() {
    return {}
  },
  // 注册该组件要使用的组件  起别名
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>