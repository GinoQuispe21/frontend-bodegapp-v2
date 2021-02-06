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
                        <h3>Forgot your password? Send to your email a chance to change it!</h3>
                        <form name="fPassword">
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "email" name="email1" id="forgot" placeholder ="Email-Address" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <button type ="button" v-on:click="validationP()" class = "forget mt-3 mb-5">Remind me</button>
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
        validationP(){
            var x = document.forms["fPassword"]["email1"].value;
            if (x == ""){
            alert("Please input an email");
            }
            else {
            alert("Mail has been sent");
            this.$router.push("/changepassword");
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

.forget{
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