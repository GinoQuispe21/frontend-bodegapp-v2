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
                        <img src = "../assets/safebag_color.png" class = "bodegaap Font-weight-bold py-3">
                        <h3>Please complete the following information</h3>
                        <form class="text-info">
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "name" placeholder ="First name" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "lastname" placeholder ="Last tname" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "dni" placeholder ="DNI" class ="form-control my-3 p-4">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class = "col-lg-7">
                                    <input type = "phone" placeholder ="Phone-Number" class ="form-control my-3 p-4">
                                </div>
                            </div>
                        </form>
                        <div class="form-row">
                            <div class = "col-lg-7">
                                <router-link to="/register2" class ="go-register2"><button type ="button" class = "register mt-3 mb-5">Register</button></router-link>
                            </div>
                        </div>
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

.si{
    color: red;
}
</style>