import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes:[
        {path: "/", alias: "/login", name:"login", component:() => import("./components/Login")},
        {path: "/register",  name:"register", component:() => import("./components/Register")},
        {path: "/register2",  name:"register2", component:() => import("./components/Register2")},
        {path: "/register3",  name:"register3", component:() => import("./components/Register3")},
        {path: "/homepage",  name:"homepage", component:() => import("./components/HomePage")},
        {path: "/forgotpassword",  name:"forgotpassword", component:() => import("./components/ForgotPassword")},
        {path: "/changepassword",  name:"changepassword", component:() => import("./components/ChangePassword")}
    ]
})