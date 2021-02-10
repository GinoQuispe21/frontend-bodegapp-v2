<template>
  <v-card class="forgotwall">
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
                        <h3>Change your password. Try remebering this one </h3>
                        <form name="cPassword">
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "password" name="password1" id="myNPassword" placeholder ="New-Password" class ="form-control my-3 p-4">
                                    <input type="checkbox" @click="showPassword"> Show Password
                                </div>
                                <div class = "col-lg-7">
                                    <input type = "password" name="password2" placeholder ="Confirm-New-Password" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <button type ="button" @click="validationCP()" class = "change mt-3 mb-5">Change Password </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>
    </v-card>
</template>

<script>
export default {
    methods:{
        showPassword(){
            var x = document.getElementById("myNPassword")
            if(x.type === "password" ){
                x.type = "text"; 
            }
            else{
                x.type = "password";
            }
        },
        validationV1(){
            var x = document.forms["cPassword"]["password1"].value;
            var y = document.forms["cPassword"]["password2"].value;
            if (x == "" || y == ""){
                return true;
            }
        },

         validationV2(){
            var x = document.forms["cPassword"]["password1"].value;
            var y = document.forms["cPassword"]["password2"].value;
            if (x == y){
                return true;
            }
            else{
                return false;
            }
        },  
        validationCP(){
            if(this.validationV1() == true){
                this.$swal('Please input the password');
            }
            else if(this.validationV2() == true){
                alert("Password changed succesfully");
                this.$router.push("/");
            }
            else{
                alert("Passwords do not match, try again");
            }
        },

    }
}
</script>

<style scooped lang="scss">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.forgotwall{
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

.change{
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

$swal2-background: #F24236;
$swal2-color-text: #F0F7F4;

@import '~sweetalert2/src/sweetalert2';

</style>