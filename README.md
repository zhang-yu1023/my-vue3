# my-vue

## 项目开发
 ### 搭建框架
 1. 创建vue3项目：vue create my-vue
 2. 引入element-ui: （VUE3 项目）
    * 安装 `npm i element-plus -s`
    * vue3 使用命令 ：`npm add element`,并在生成的 plugins/elements 引入
        ```import { createApp } from "vue";
           import App from "../App.vue";
           
           import "../element-variables.scss";
           import ElementUI from "element-plus";
           
           createApp(App).use(ElementUI);
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
