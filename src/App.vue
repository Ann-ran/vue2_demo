<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- 自定义指令 -->
    <input type="text" v-focus />
    <!-- 过滤器 -->
    <p>Price: {{ price | percent }}</p>
    <!-- mixins -->
    <p>{{ name }}</p>
    <!-- plugins -->
    <button @click="$myPlugin">Click me</button>
    <!-- router -->
    <router-link to="/">to home</router-link>
    <router-link to="/about">to about</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  import Vue from 'vue'
  // import HelloWorld from './components/HelloWorld.vue'
  import focus from '@/directives/focus'
  import percent from './filters/percent'
  import myMixin from '@/mixins/myMixin'
  import MyPlugin from '@/plugins/my-plugin'
  Vue.use(MyPlugin, { name: 'anran' })
  export default {
    name: 'App',
    components: {
      // HelloWorld
    },
    directives: { focus },
    filters: { percent },
    mixins: [myMixin],
    data() {
      return {
        test: 'HelloWorld',
        price: 100
      }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
      this.greet()
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mount() {
      console.log('mount')
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    beforeDestroy() {
      console.log('beforeDestroy')
    },
    destroy() {
      console.log('destroy')
    },
    methods: {
      toAbout() {
        console.log('toAbout')
      }
    }
  }
</script>
<style lang="less" scoped>
  #app {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // 修复 第一个p并没有变颜色
    p:first-of-type {
      color: green;
    }
  }
</style>
