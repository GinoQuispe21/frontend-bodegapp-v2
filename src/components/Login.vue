<template>
    <v-card>
        <b-col class = "container">
            <div class = "forms-container">
                <div class = "signin-singup">
                    <b-form action = "" class = "sign-in-form">
                        <h2 class = "title">Sign in</h2>
                        <div class = "input-field">
                            <i class = "fas fa-user"></i>
                            <input type="text" placeholder="Username">
                        </div>
                        <div class = "input-field">
                            <i class = "fas fa-user"></i>
                            <input type = "password" placeholder="Password">
                        </div>

                       <b-btn class="btn-signin-signup" @click="login()">Sign in </b-btn>

                        <p class ="social-text"> Or sign in with social platforms </p>
                        <div class = "social-media">
                            <a href = "#" class = "social-icon">
                                <i class = "fab fa-facebook-f"></i>
                            </a>
                            <a href = "#" class = "social-icon">
                                <i class = "fab fa-twitter"></i>
                            </a>
                            <a href = "#" class = "social-icon">
                                <i class = "fab fa-google"></i>
                            </a>
                            <a href = "#" class = "social-icon">
                                <i class = "fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </b-form>
                    <b-form action = "" class = "sign-up-form">
                        <h2 class = "title">Sign up</h2>
                        <div class = "input-field">
                            <i class = "fas fa-user"></i>
                            <input type="text" placeholder="Username">
                        </div>
                        <div class = "input-field">
                            <i class = "fas fa-user"></i>
                            <input type = "text" placeholder="Email">
                        </div>
                        <div class = "input-field">
                            <i class = "fas fa-user"></i>
                            <input type = "password" placeholder="Password">
                        </div>

                       <b-btn class="btn-signin-signup" @click="login()">Sign up </b-btn>

                        <p class ="social-text"> Or sign up with social platforms </p>
                        <div class = "social-media">
                            <a href = "#" class = "social-icon">
                                <i class = "fab fa-facebook-f"></i>
                            </a>
                            <a href = "#" class = "social-icon">
                                <i class = "fab fa-twitter"></i>
                            </a>
                            <a href = "#" class = "social-icon">
                                <i class = "fab fa-google"></i>
                            </a>
                            <a href = "#" class = "social-icon">
                                <i class = "fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </b-form>
                </div>
            </div>
            <div class = "panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New Here ?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mi, pharetra ullamcorper dapibus phasellus interdum libero tempus, 
                            eleifend placerat morbi inceptos cubilia proin ornare. Lacus diam rutrum nulla porttitor imperdiet augue eros turpis, pellentesque 
                            lobortis per placerat conubia dapibus lectus erat, tristique interdum curabitur blandit etiam nascetur vulputate. 
                            Curabitur vel elementum cubilia per erat, dictumst orci vehicula convallis scelerisque, duis sapien egestas faucibus.
                        </p>
                        <b-btn class="btn tranparent" id="sign-in-btn">Sign in</b-btn>
                    </div>

                    <img src="../assets/bodega2.svg" class="image" alt="">
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mi, pharetra ullamcorper dapibus phasellus interdum libero tempus, 
                            eleifend placerat morbi inceptos cubilia proin ornare. Lacus diam rutrum nulla porttitor imperdiet augue eros turpis, pellentesque 
                            lobortis per placerat conubia dapibus lectus erat, tristique interdum curabitur blandit etiam nascetur vulputate. 
                            Curabitur vel elementum cubilia per erat, dictumst orci vehicula convallis scelerisque, duis sapien egestas faucibus.
                        </p>
                        <b-btn class="btn tranparent" id="sign-up-btn">Sign up</b-btn>
                    </div>

                    <img src="../assets/welcome2.svg" class="image" alt="">
                </div>
            </div>
        </b-col>
    </v-card>
</template>

<script>

</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.btn-signin-signup{
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #778DA9;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: .5s;
}

.btn:hover{
    background-color: #4d5e74;
    color: white;
}

.image{
    width: 100%;
}

.btn.transparent{
    margin: 0;
    background: none;
    border: 2px solid #F0F7F4; 
    width: 130px;

}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.right-panel .content .right-panel .image{
  transform: translateX(800px);
}
</style>