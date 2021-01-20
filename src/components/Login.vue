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

                       <b-btn @click="login()">Sign in </b-btn>

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
                </div>
            </div>
            <div class = "panels-container">

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

.btn{
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

</style>