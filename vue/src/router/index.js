import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from '../views/Login'

import Home from '../views/Home'

export default new Router({
    routes: [{
            path: '/Login',
            name: 'Login',
            component: Login
        },

        {
            path: '/Home',
            name: 'Home',
            component: Home,
            //子路由。
            children: [{
                    path: '/Loginuut',
                    name: 'Login',
                    component: Login
                },
                {
                    path: '/Loginout',
                    redirect: '/Login', //重定向那个路由                  
                }
            ]
        },

    ]
})