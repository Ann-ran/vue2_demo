[toc]

# 安装插件

`EditorConfig for VS Code`

`ESLint`

`prettier`

# 架构

- assets：用于存放静态资源文件，例如图片、字体等。
- components：存放公共组件。
- directives：存放自定义指令。

```js
// directives/focus.js
export default { inserted: function (el) { el.focus() } }
```

```html
<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
  import focus from '@/directives/focus'

  export default {
    name: 'MyComponent',
    directives: {
      focus
    }
  }
</script>
```

- filters：存放过滤器。

```js
// filters/percent.js
export default function(value) {
  return `${value}%`;
}
```

```html
<template>
  <div>
    Price: {{ price | percent }}
  </div>
</template>

<script>
  import percent from './filters/percent';

  export default {
    data() {
      return {
        price: 100
      }
    },
    filters: {
      percent
    }
  }
</script>
```

- mixins：存放混入对象。

```js
// myMixin.js
export default {
  data: function () {
    return {
      message: 'Hello, world!'
    }
  },
  methods: {
    greet: function () {
      console.log(this.message)
    }
  }
}
```

```html
<template>
  <div>{{ message }}</div>
</template>

<script>
import myMixin from '@/mixins/myMixin'

export default {
  mixins: [myMixin],
  created() {
    this.greet()
  }
}
</script>
```

- plugins：存放插件，如第三方库或自己编写的插件。

```js
// plugins/my-plugin.js
export default {
  install(Vue, options) {
    const message = options && options.name ? options.name : 'Hello from my plugin!'
    Vue.prototype.$myPlugin = function () {
      console.log('message', message)
    }
  }
}
```

```js
// plugins/my-plugin-1.js
export default {
  install(Vue, options) {
    // 添加插件 1 的代码
  }
}
```

```js
// plugins/my-plugin-2.js
export default {
  install(Vue, options) {
    // 添加插件 2 的代码
  }
}
```

```js
// main.js
import Vue from 'vue'
import myPlugin from './plugins/my-plugin'
import myPlugin1 from './plugins/my-plugin-1'
import myPlugin2 from './plugins/my-plugin-2'
Vue.use(myPlugin)
Vue.use(myPlugin1, { myOption: true })
Vue.use(myPlugin2, { myOtherOption: 'hello' })
```

`传入 options`

```js
import Vue from 'vue'
import MyPlugin from '@/path/to/my-plugin'
Vue.use(MyPlugin, { name: 'anran' })
```

- router：存放应用的路由信息配置。
- store：存放 Vuex 状态管理的相关文件。
- styles：存放样式文件。
- utils：存放通用工具函数。
- views：存放视图组件。
- App.vue：应用根组件。
- main.js：应用入口文件，主要进行 Vue 实例的初始化及引入全局依赖。
