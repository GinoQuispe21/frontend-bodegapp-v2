import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes:[
        {path: "/", alias: "/login", name:"login", component:() => import("./components/SignIn/Login")},
        {path: "/register",  name:"register", component:() => import("./components/SignUp/Register")},
        {path: "/register2",  name:"register2", component:() => import("./components/SignUp/Register2")},
        {path: "/register3",  name:"register3", component:() => import("./components/SignUp/Register3")},
        {path: "/homepage",  name:"homepage", component:() => import("./components/Home/HomePage")},
        {path: "/forgotpassword",  name:"forgotpassword", component:() => import("./components/SignIn/ForgotPassword")},
        {path: "/changepassword",  name:"changepassword", component:() => import("./components/SignIn/ChangePassword")}
    ]
})