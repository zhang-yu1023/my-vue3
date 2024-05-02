# my-vue

## 项目开发
 ### 搭建框架
 1. 创建vue3项目：`vue create my-vue`
 2. 使用typscript : `vue add typescript`
 3. 引入element-ui: （VUE3 项目）
    * 安装 `npm i element-plus -s`
    * main.ts引入 element-plus
        ```import { createApp } from 'vue'
           import App from './App.vue'
           import ElementPlus from 'element-plus'
           import 'element-plus/dist/index.css'
           
           const app = createApp(App)
           app.use(ElementPlus, { size: 'small', zIndex: 3000 })
           app.mount('#app')
        ```





















## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
