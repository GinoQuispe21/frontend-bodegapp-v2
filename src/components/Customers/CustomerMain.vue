<template>
    <v-card>
        <h2>Customers</h2>
        <v-data-table :headers="columns" :items="customers" class="table elevation-3 ">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-btn class="mb-2" :elevation="10" color="info " dark @click="drawer =!drawer">
                        New Customer
                    </v-btn>
                </v-toolbar>
            </template>
        </v-data-table>
    </v-card>  
</template>

<script>
import { baseURL } from '@/baseURL';

export default {
    name: "Customers",
    data() {
        return{
            drawer: false,
            columns : [
                {text: 'ID', value: 'id', class:'blue darken-2 white--text'},
                {text: 'ADDRESS', value:'address', class:'blue darken-2 white--text'},
                {text: 'COUNTRY', value:'country', class:'blue darken-2 white--text'},
                {text: 'LAST NAME', value:'customer_lastname', class:'blue darken-2 white--text'},
                {text: 'NAME', value:'customer_name', class:'blue darken-2 white--text'},
                {text: 'DISTRICT', value:'district', class:'blue darken-2 white--text'},
                {text: 'DNI', value:'dni', class:'blue darken-2 white--text'},
                {text: 'EMAIL', value:'email', class:'blue darken-2 white--text'},
                //{text: 'STATE', value:'state', class:'blue darken-2 white--text'},
                //S{text: 'USER ID', value:'user_id', class:'blue darken-2 white--text'},
            ],
            customers:[]
        }
    },
    mounted(){
        this.axios.get(baseURL + 'users/1/customers').then(res =>{
            console.log(res);
            this.customers = res.data.content;
        })
    }
    
}
</script>

<style scooped lang="scss">

.bodegaap{
    height: 10%;
    width: 15%;
}

</style>