<template>
<v-card>
    <NavBar />
    <ProfileMain />
</v-card>
</template>

<script>
import NavBar from '../Home/NavBar';
import ProfileMain from './ProfileMain.vue';
export default {
    name: 'Profile',
    components:{
        NavBar,
        ProfileMain
    },
    mounted(){
    }
  }
</script>

<style scooped lang="scss">
</style>