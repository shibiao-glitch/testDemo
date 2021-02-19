// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

//导入上面配置的路由目录
import router from './router'

//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter); //装路由
Vue.use(ElementUI); //elementui
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})