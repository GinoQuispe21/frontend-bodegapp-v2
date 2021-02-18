<template>
    <v-card>
        <div style="height: 1010px" class="xd">
            <h2 class="title-component">List of Products</h2>
            <v-data-table 
                :headers="columns" 
                :items="products"
                :search="search" 
                class="elevation-5">
                <template v-slot:top>
                    <v-toolbar flat>
                        <div class="search">
                            <v-col cols="12" sm="12">
                                <v-text-field v-model="search" append-icon="search" label="Search Product" single-line hide-details></v-text-field>
                            </v-col>
                        </div>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-btn class="mb-2" :elevation="10" color="brown darken-3" dark @click="drawer =!drawer">
                            New Product
                        </v-btn>
                    </v-toolbar>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon small class="mr-2" @click="editProduct(item.id)"> mdi-pencil </v-icon>
                    <v-icon small @click="deleteProduct(item.id)"> mdi-delete </v-icon>
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
                                    <v-text-field v-model="productName" label="Product Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="providerName" label="Provider Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="purchasePrice" label="Sale Price*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="salePrice" label="Purchase Price*" required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#F87575" class="ma-2 white--text" @click="cancelRegister">Cancel</v-btn>
                        <v-btn color="#778DA9" class="ma-2 white--text" @click="register">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogEdit" max-width="500px">
                <v-card>
                    <v-card-title class="brown darken-3">
                        <span class="headline" style="color:white">Edit Product</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="productName" label="Product Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="providerName" label="Provider Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="purchasePrice" label="Sale Price*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="salePrice" label="Purchase Price*" required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#F87575" class="ma-2 white--text" @click="cancel">Cancel</v-btn>
                        <v-btn color="#778DA9" class="ma-2 white--text" @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="550px">
                <v-card>
                    <v-card-title class="headline">Are you sure you want to delete this product?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>

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
            search: ''  ,
            dialogEdit: false,
            dialogDelete: false,
            productName : null,
            providerName : null,
            purchasePrice : null,
            salePrice : null,
            index : null,
            columns : [
                {text: 'ID', align: 'left',sortable: false, value: 'id', class:'blue-grey darken-1 white--text'},
                {text: 'PRODUCT', value:'productName', class:'blue-grey darken-1 white--text'},
                {text: 'PROVIDER', value:'providerName', class:'blue-grey darken-1 white--text'},
                {text: 'SALE PRICE', value:'salePrice', class:'blue-grey darken-1 white--text'},
                {text: 'PURCHASE PRICE', value:'purchasePrice', class:'blue-grey darken-1 white--text'},
                {text: 'ACTIONS', value: 'actions', class:'blue-grey darken-1 white--text', sortable: false}
            ],
            products:[],
            product: []
        }
    },
    mounted(){
        this.axios.get(baseURL + 'products').then(res =>{
            this.products = res.data.content;
        })
    },  
    methods: {
        register (){
            this.axios.post(baseURL + 'products',{
                productName: this.productName,
                providerName: this.providerName,
                purchasePrice: this.purchasePrice,
                salePrice: this.salePrice,
            }).catch(error => {
                    this.$swal.fire({
                        icon: 'error',
                        title: `${error}`,
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
            })
        },
        deleteProduct (id) {
            this.index = id;
            this.dialogDelete = true;
        },
        deleteItemConfirm () {
            this.axios.delete(baseURL+'products/'+ this.index).then(response =>{
                console.log(response)});
            this.closeDelete();
        },
        closeDelete () {
            this.dialogDelete = false;
        },
        editProduct (id) {
            console.log(id);
            this.index = id;
            this.axios.get(baseURL+'products/'+this.index).then(response => {
                console.log(response.data);
                this.product = response.data;
                this.productName = this.product.productName;
                this.providerName = this.product.providerName;
                this.salePrice = this.product.salePrice;
                this.purchasePrice =this.product.purchasePrice;
            });
            this.dialogEdit = true;
        },
        cancel (){
            this.dialogEdit = false;
        },
        save (){
            this.dialogEdit = false;
        },
        cancelRegister (){
            this.drawer = false;
            this.productName = null;
            this.providerName = null;
            this.purchasePrice = null;
            this.salePrice = null;
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
    top: 50px;
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

.search{
    width: 1400px;
}

.title-component{
    text-align: center;
    position: relative;
    top: 20px;
}

</style>