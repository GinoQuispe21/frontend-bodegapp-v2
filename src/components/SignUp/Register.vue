<template>
    <v-card class="wall2">
        <div>
            <br/>
            <br/>
            <br/>
        </div>
        <section class = "Form my-5 mx-5 mt-5">
            <div class="container">
                <div class = "row no-gutters">
                    <div class = "col-lg-7 px-5 pt-5">
                        <img src = "../../assets/safebag_color.png" class = "bodegaap Font-weight-bold py-3">
                        <h3>First time here? Sign up to us!</h3>
                        <form>
                            <div class="form-row">
                                <div class = "col-lg-8">
                                    <p>Write your email:</p>
                                    <input type = "email" placeholder ="Email-Address" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-8">
                                    <p>Write your password:</p>
                                    <input type = "password" placeholder ="Password" id = "myPassword" class ="form-control my-3 p-4">
                                    <input type="checkbox" @click="showPassword"> Show Password
                                </div>
                            </div>
                            <br>
                            <div class="form-row">
                                <div class = "col-lg-8">
                                    <p>Please, confirm your password:</p>
                                    <input type = "password" placeholder ="Confirm-Password" id = "myCPassword" class ="form-control my-3 p-4">
                                    <input type="checkbox" @click="showPassword"> Show Password
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-8">
                                    <router-link to="/register2" class ="go-register2"><button type ="button" class = "register mt-3 mb-4">Continue</button></router-link>
                                    <p>Already have an account? <router-link to="/" class ="back-login mt-3">Sign in here</router-link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class = "col-lg-5">
                        <img src ="../../assets/no.jpg" class = "img-fluid" alt ="">
                    </div>
                </div>
            </div>
            </section>
    </v-card>
</template>

<script>

export default {
    methods: {
        showPassword(){
            var x = document.getElementById("myPassword")
            if(x.type === "password" ){
                x.type = "text"; 
            }
            else{
                x.type = "password";
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
.wall2{
    height: 100%;
    background: rgb(242,66,54);
    background: linear-gradient(90deg, rgba(242,66,54,1) 0%, rgba(248,117,117,1) 20%, rgba(114,141,176,1) 100%);
    
    img{
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    .row{
        background-color: #f0f7f4;
        border-radius: 30px;
        box-shadow: 12px 12px 22px;
    
    }
}
    


.register{
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