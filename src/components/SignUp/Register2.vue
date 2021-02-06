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
                    <div class = "col-lg-7 px-5 pt-1">
                        <img src = "../../assets/safebag_color.png" class = "bodegaap Font-weight-bold py-3">
                        <h3>Please complete the following information</h3>
                        <form class="text-info">
                            <div class="form-row">
                                <div class = "col-lg-8">
                                    <p style="color: black">Write your first name:</p>
                                    <input type = "name" placeholder ="First name" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-8">
                                    <p style="color: black">Write your last name:</p>
                                    <input type = "lastname" placeholder ="Last tname" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-8">
                                    <p style="color: black">Write your national identity document (DNI):</p>
                                    <input type = "dni" placeholder ="DNI" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-8">
                                    <p style="color: black">Write your phone, please:</p>
                                    <input type = "phone" placeholder ="Phone-Number" class ="form-control my-3 p-4">
                                </div>
                            </div>
                        </form>
                        <div class="form-row">
                            <div class = "col-lg-8">
                                <router-link to="/register3" class ="go-register3"><button type ="button" class = "register mt-3 mb-4">Continue</button></router-link>
                                <p>Already have an account? <router-link to="/" class ="back-login mt-3">Sign in here</router-link></p>
                            </div>
                        </div>
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