<template>
    <v-card>
        <h2>Products</h2>
        <v-data-table :headers="columns" :items="products" class="elevation-5">
        </v-data-table>
    </v-card>
    
</template>

<script>
import { baseURL } from '@/baseURL';

export default {
    name: "Products",
    data() {
        return{
            columns : [
                {text: 'ID', value: 'id', class:'blue darken-2 white--text'},
                {text: 'PRODUCT', value:'productName', class:'blue darken-2 white--text'},
                {text: 'PROVIDER', value:'providerName', class:'blue darken-2 white--text'},
                {text: 'SALE PRICE', value:'salePrice', class:'blue darken-2 white--text'},
                {text: 'PURCHASE PRICE', value:'purchasePrice', class:'blue darken-2 white--text'}
            ],
            products:[]
        }
    },
    mounted(){
        this.axios.get(baseURL + 'products').then(res =>{
            console.log(res);
            this.products = res.data.content;
        })
    }
    
}
</script>

<style scooped lang="scss">

</style>