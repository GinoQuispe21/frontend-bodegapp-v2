<template>
    <v-app>
        <NavBar/>
        <CustoomerMain/>
    </v-app>
</template>

<script>
import NavBar from '@/components/Home/NavBar';
import CustoomerMain from './CustoomerMain.vue';

export default {
    name: 'Customers',
    components :{
        NavBar,
        CustoomerMain
    }
}
</script>

<style scooped lang="scss">

</style>