<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="text" v-focus />
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue'
  import focus from '@/directives/focus'
  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    directives: { focus },
    data() {
      return {
        test: 'HelloWorld'
      }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
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
      ccc() {
        console.log('ccc')
      }
    }
  }
</script>
<style></style>
