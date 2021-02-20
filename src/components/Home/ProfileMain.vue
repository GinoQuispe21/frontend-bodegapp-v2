<template>
    <v-container fluid>
        <h2 style="text-align: center">Profile</h2>
        <h5>{{user.username}}</h5>
        <h5>{{user.lastname}}</h5>
        <h5>{{user.dni}}</h5>
        <h5>{{user.address}}</h5>
        <h5>{{user.district}}</h5>
        <h5>{{user.email}}</h5>
        <h5>{{user.phoneNumber}}</h5>
        <h5>{{user.birthdate}}</h5>
    </v-container>
</template>

<script>

import { baseURL } from '@/baseURL';

export default {
    name: "Profile",
    data() {
        return{
            user: null,
        }
    },
    mounted(){
        this.axios.get(baseURL + 'users/1').then(res =>{
            this.user = res.data;
        })
    }
}
</script>

<style scooped lang="scss">
</style>