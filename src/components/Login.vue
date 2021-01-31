
<template>
    <v-card>
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
                        <h1 class = "Font-weight-bold py-3">BodegApp</h1>
                        <h3>Sign into your account</h3>
                        <form>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "email" placeholder ="Email-Address" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "password" placeholder ="******" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <button type ="button" class = "login mt-3 mb-5">Login</button>
                                </div>
                            </div>
                            <a href = "#">Forget password?</a>
                            <p>Don't have an  account? <a href="#">Register here</a></p>
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
        }
    }

</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background: #778DA9;
}
.row{
    background-color: #fae2e2;
    border-radius: 30px;
    box-shadow: 12px 12px 22px;
}
img{
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}
.login{
    text-align: center;
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    background-color: black;
    color: white;
    border-radius: 4px;
    font-weight: bold;
}
.login:hover{
    background: white;
    border: 1px black;
    color: black;
}
</style>
