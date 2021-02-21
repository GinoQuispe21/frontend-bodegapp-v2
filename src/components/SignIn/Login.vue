
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
                        <img src ="../../assets/si.jpg" class = "img-fluid" alt ="">
                    </div>
                    <div class = "col-lg-7 px-5 pt-5">
                        <br/><br/>
                        <img src = "../../assets/safebag_color.png" class = "bodegaap Font-weight-bold py-3">
                        <h3>Sign into your account</h3>
                        <form name="login-form">
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input v-model="uEmail" type = "email" name="email" id="email" placeholder ="Email-Address" class ="form-control my-3 p-4" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input v-model="uPassword" type = "password" name="password" id="password"  placeholder ="******" class ="form-control my-3 p-4" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <button @click="validationLogin()" type ="button" class = "login mt-3 mb-5">Login</button>
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
    import { baseURL } from '@/baseURL';
    export default  {
        name: "LogIn",
        data: ()=> {
            return{

            }
        },
        mounted (){
            this.axios.get(baseURL + 'users/1').then(response =>{
                this.user = response.data;
                this.email = this.user.email;
                this.password = this.user.password;
            })
        },
        methods:{
            validationLogin(){
                if(this.uEmail === this.email && this.uPassword === this.password){
                     this.$swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                    ).then(this.$router.push("/homepage"));
                }
                else {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                        }
                    )
                }
            }
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

@import '~sweetalert2/src/variables';

$swal2-background: #f0f7f4;

@import '~sweetalert2/src/sweetalert2';


</style>
