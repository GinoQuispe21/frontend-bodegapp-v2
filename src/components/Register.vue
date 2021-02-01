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
                                    <input type = "password" placeholder ="Confirm-Password" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <button type ="button" class = "register mt-3 mb-5">Register</button>
                                </div>
                            </div>
                            <p>Already have an account? <a href="/">Sign in here</a></p>
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
    methods:
        function showPassword(){
        var x = document.getElementById("myPassword")
        if(x.type === "password" ){
            alert("funca");
            x.type = "text"; 
        }
        else{
            x.type = "password";
        }
    }
}



</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color:  #f0f7f4
}
body{
    background: #fae2e2;
}
.row{
    background-color: #778da9;
    border-radius: 30px;
    box-shadow: 12px 12px 22px;
}
a{
    color: #000000;
}
img{
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
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
}
.register:hover{
    background: white;
    border: 1px black;
    color: black;
}

</style>