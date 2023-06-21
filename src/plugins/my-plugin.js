export default {
  install(Vue, options) {
    const message = options && options.name ? options.name : 'Hello from my plugin!'
    Vue.prototype.$myPlugin = function () {
      console.log('message', message)
    }
  }
}
