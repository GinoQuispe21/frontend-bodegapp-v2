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
                        <h1 class = "Font-weight-bold py-3">BodegApp</h1>
                        <h3>First time here? Sign up to us!</h3>
                        <form>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "email" placeholder ="Email-Address" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "password" placeholder ="Password" id = "myPassword" class ="form-control my-3 p-4">
                                    <input type="checkbox" @click="showPassword">Show Password
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "password" placeholder ="Confirm-Password" id = "myCPassword" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <button type ="button" class = "register mt-3 mb-5">Register</button>
                                </div>
                            </div>
                            <p>Already have an account? <router-link to="/">Sign in here</router-link></p>
                        </form>
                    </div>
                    <div class = "col-lg-5">
                        <img src ="../assets/no.jpg" class = "img-fluid" alt ="">
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
    background: #fae2e2;

    a{
        color: #ffffff;
    }
    img{
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    .row{
        background-color: #778DA9;
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
    background-color: black;
    color: white;
    border-radius: 4px;
    font-weight: bold;

    &:hover{
        background: white;
        border: 1px black;
        color: black;
    }
}


</style>