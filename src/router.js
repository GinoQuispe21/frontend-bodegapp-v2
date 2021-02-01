import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes:[
        {path: "/", alias: "/login", name:"login", component:() => import("./components/Login")},
        {path: "/register",  name:"register", component:() => import("./components/Register")},
        {path: "/homepage",  name:"homepage", component:() => import("./components/HomePage")}
    ]
})