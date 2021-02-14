<template>
<v-card>
    <NavBar/>
    <ProductsMain/>
</v-card>
</template>

<script>
import NavBar from '@/components/Home/NavBar';
import ProductsMain from './ProductsMain.vue';
export default {
    name: 'Products',
    components :{
        NavBar,
        ProductsMain
    }
}
</script>

<style scooped lang="scss">

</style>