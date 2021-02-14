<template>
<v-card>
    <NavBar/>
    <MovementsMain/>
</v-card>
</template>

<script>
import NavBar from '@/components/Home/NavBar';
import MovementsMain from './MovementsMain.vue';
export default {
    name: 'Movements',
    components :{
        NavBar,
        MovementsMain
    }
}
</script>

<style scooped lang="scss">

</style>