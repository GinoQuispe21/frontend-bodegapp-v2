
<template>
    <v-card class="wall">
        <div>
            <br/>
            <br/>
            <br/>
        </div>
        <section class = "Form my-5 mx-5 mt-5">
            <div class="container">
                <div class = "row no-gutters">
                    <div class = "col-lg-5">
                        <img src ="../assets/si.jpg" class = "img-fluid" alt ="">
                    </div>
                    <div class = "col-lg-7 px-5 pt-5">
                        <br/><br/>
                        <img src = "../assets/safebag_color.png" class = "bodegaap Font-weight-bold py-3">
                        <h3>Sign into your account</h3>
                        <form>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input id="email" type = "email" placeholder ="Email-Address" class ="form-control my-3 p-4" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input id="password" type = "password" placeholder ="******" class ="form-control my-3 p-4" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <button @click="validation()" type ="button" class = "login mt-3 mb-5">Login</button>
                                </div>
                            </div>
                            <router-link to="/forgotpassword">Forget password?</router-link>
                            <p>Don't have an  account? <router-link to="/register">Register here</router-link></p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
    </v-card>
</template>

<script>
    //import { baseURL } from '@/baseURL';
    export default  {
        name: "LogIn",
        data: ()=> {
            return{

            }
        },
        methods:{
        }
    }

</script>

<style scooped lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.wall{
    height: 100%;
    background: rgb(119,141,169);
    background: linear-gradient(90deg, rgba(119,141,169,1) 0%, rgba(248,117,117,1) 75%, rgba(242,66,54,1) 100%);

    .row{
        background-color: #f0f7f4;
        border-radius: 30px;
        box-shadow: 12px 12px 22px;
    }
    img{
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
}

.login{
    text-align: center;
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    background-color: #32292F;
    color: white;
    border-radius: 4px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: #f87575;
        border: 1px  #f0f7f4;
        color : #f0f7f4;;
    }
}

.bodegaap{
    height: 15%;
    width: 52%;
}

</style>
