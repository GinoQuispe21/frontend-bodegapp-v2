<template>
    <nav>
        <v-toolbar color="#F24236" flat app>
            <v-app-bar-nav-icon class="white-text" @click="drawer =!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">BodegApp</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="#F87575" @click="signout()">
                <span>EXIT</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" dark app class="darken-4" color="#F87575">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <v-img src="../../assets/10_avatar-512.png"></v-img>
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">ñiño</p>
                </v-flex>
            </v-layout>
            <v-list flat>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                    <v-list-item-icon>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-titlte>{{link.text}}</v-list-item-titlte>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data: () => ({
        drawer:  true,
        links: [
            {icon: 'dashboard', text: 'Home',  route:'/homePage'},
            {icon: 'point_of_sale',  text:'Movements', route: '/movements'},
            {icon: 'monetization_on', text:'Sales'},
            {icon: 'storefront', text:'Products',  route:'/products'},
            {icon: 'people', text:'Customers', route:'/customers'},
        ],
    }),
    methods:{
        signout(){
           this.$swal.fire({
            title: 'Are you sure?',
            text: "Do you want to log out? You can't reverse this option!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire(
                    'Log Out!',
                    'You have closed your session',
                    'success'
                    ).then(this.$router.push("/login"));
                }
            })
        }
    }
}
</script>

<style scooped lang="scss">
.border{
    border-left: 4px sold #0ba518;
}

@import '~sweetalert2/src/variables';

$swal2-background: #f0f7f4;

@import '~sweetalert2/src/sweetalert2';
</style>