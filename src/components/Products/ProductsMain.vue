<template>
    <v-card>
        <div>
            <p></p>
        </div>
        <div style="height: 1010px" class="xd">
            <v-data-table 
                :headers="columns" 
                :items="products" 
                class="elevation-5">
                <template v-slot:top>
                    <v-toolbar flat>
                         <v-toolbar-title style="text-align:center">PRODUCTS</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn class="mb-2" :elevation="10" color="brown darken-3" dark @click="drawer =!drawer">
                            New Product
                        </v-btn>
                    </v-toolbar>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon small @click="deleteItem(item.id)">mdi-delete</v-icon>
                </template>
            </v-data-table>
            <v-dialog v-model="drawer" max-width="500px">
                <v-card>
                    <v-card-title class="brown darken-3">
                        <span class="headline" style="color:white">Register Product</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Product Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Provider Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Sale Price*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="Purchase Price*" required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#F87575" class="ma-2 white--text" @click="cancelar">Cancel</v-btn>
                        <v-btn color="#778DA9" class="ma-2 white--text" @click="guardar">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-col col="12" sm="12">
                <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
            </v-col>

        </div>
    </v-card>
</template>

<script>
import { baseURL } from '@/baseURL';

export default {
    name: "Products",
    data() {
        return{
            drawer: false,
            columns : [
                {text: 'ID', value: 'id', class:'blue-grey darken-1 white--text'},
                {text: 'PRODUCT', value:'productName', class:'blue-grey darken-1 white--text'},
                {text: 'PROVIDER', value:'providerName', class:'blue-grey darken-1 white--text'},
                {text: 'SALE PRICE', value:'salePrice', class:'blue-grey darken-1 white--text'},
                {text: 'PURCHASE PRICE', value:'purchasePrice', class:'blue-grey darken-1 white--text'},
                {text: 'ACTIONS', value: 'actions', class:'blue-grey darken-1 white--text', sortable: false}
            ],
            products:[]
        }
    },
    mounted(){
        this.axios.get(baseURL + 'products').then(res =>{
            this.products = res.data.content;
        })
    },
    methods: {
        deleteItem(id){
            console.log(id);
        }
    }
    
}
</script>

<style scooped lang="scss">
.xd{
    background-color: #f0f7f4;
}
.title{
    text-align: center;
    font-size: 500px;
}
.v-data-table{
    width:90%;
    position: relative;
    left: 85px;
}
.plus{
    position: relative;
    top: 40px;
    right: -1300px;
}
.canecel{
    position: relative;
    left: 100px;
}
.save{
    position: relative;
    left: 230px;
}

</style>