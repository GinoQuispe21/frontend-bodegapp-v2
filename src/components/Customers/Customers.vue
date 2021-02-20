<template>
    <v-app>
        <NavBar/>
        <CustomerMain/>
    </v-app>
</template>

<script>
import NavBar from '@/components/Home/NavBar';
import CustomerMain from './CustomerMain.vue';
export default {
    name: 'Customers',
    components :{
        NavBar,
        CustomerMain
    },
}
</script>

<style scooped lang="scss">

</style>