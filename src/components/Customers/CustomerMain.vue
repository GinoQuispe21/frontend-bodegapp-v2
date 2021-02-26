<template>
    <v-card>
        <div style="height: 1010px" class="xd">
        <div>
            <h2 class="title-component">Customers</h2>
        </div>
        <v-data-table :headers="columns" :items="customers"  :search="search"
        class="elevation-5 ">
            <template v-slot:top>
                <v-toolbar flat>
                    <div class="search">
                            <v-col cols="12" sm="12">
                                <v-text-field v-model="search" append-icon="search" label="Search Customer" single-line hide-details></v-text-field>
                            </v-col>
                        </div>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                    <v-btn class="mb-2" :elevation="10" color="info " dark @click="drawer =!drawer">New Customer</v-btn>
                </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                    <v-icon  class="mr-2" @click="editClient(item.id)"> mdi-pencil </v-icon>
                    <v-icon  @click="deleteClient(item.id)"> mdi-delete </v-icon>
                </template>
        </v-data-table>

            <v-dialog v-model="drawer" max-width="500px">
                <v-card>
                    <v-card-title class="brown darken-3">
                        <span class="headline" style="color:white">Register Customer</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="customerName" label="Customer's Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="customerLName" label="Customer's Last Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="address" label="Address*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="country" label="Country*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="district" label="District*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="dni" label="DNI*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="email" label="Email*" required></v-text-field>
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
            
            <v-dialog v-model="drawerCustomerAccount" max-width="1000px">
                <v-card>
                    <v-card-title class="brown darken-3">
                        <span class="headline" style="color:white">Create Customer Account</span>
                    </v-card-title>
                    <v-card-text>
                        <h5 class="subt-drawer">Choose the pack for the customer account</h5>
                        <v-container>
                            <v-row dense>
                                <v-col cols="14" sm="3">
                                    <v-card color="#F87575" dark>
                                        <v-card-title class="headline">Package 1</v-card-title>
                                            <ul style="list-style: none">
                                                <li>Tasa: 10%</li>
                                                <li>Tipo: Interes Simple</li>
                                                <li>Periodo: Mensual</li>
                                                <li>Credito: 1000</li>
                                                <li>Año: Ordinario</li>
                                                <br>
                                            </ul>
                                        <v-card-actions>
                                            <v-btn text>Listen Now</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="14" sm="3">
                                    <v-card color="#778DA9" dark>
                                       <v-card-title class="headline">Package 2</v-card-title>
                                        <ul style="list-style: none">
                                            <li>Tasa: 22%</li>
                                            <li>Tipo: Interes Nominal</li>
                                            <li>Periodo: Bimestral</li>
                                            <li>Capitalizacion: Diaria</li>
                                            <li>Credito: 1500</li>
                                            <li>Año: Ordinario</li>
                                        </ul>
                                        <v-card-actions>
                                            <v-btn text>Listen Now</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="14" sm="3">
                                    <v-card color="#32292F" dark>
                                        <v-card-title class="headline">Package 3</v-card-title>
                                        <ul style="list-style: none">
                                            <li>Tasa: 18%</li>
                                            <li>Tipo: Interes Efectiva</li>
                                            <li>Periodo: Mensual</li>
                                            <li>Credito: 2000</li>
                                            <li>Año: Ordinal</li>
                                            <br>
                                        </ul>
                                        <v-card-actions>
                                            <v-btn text>Listen Now</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="14" sm="3">
                                    <v-card color="#F24236" dark>
                                        <v-card-title class="headline">Customizable</v-card-title>
                                        <div class="customize-text">
                                            In this option you can customize the options of the customer's credit account. 
                                            <br>
                                            <br>
                                            <br>
                                            <br>
                                            <br>
                                        </div>
                                        <v-card-actions>
                                            <v-btn text>Listen Now</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dialogDelete" max-width="550px">
                <v-card>
                    <v-card-title class="headline">Are you sure you want to delete this customer?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dialogEdit" max-width="500px">
                <v-card>
                    <v-card-title class="brown darken-3">
                        <span class="headline" style="color:white">Edit Customer</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="customerName" label="Customer's Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="customerLName" label="Customer's Last Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="address" label="Address*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="country" label="Country*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="district" label="District*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="dni" label="DNI*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="email" label="Email*" required></v-text-field>
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

        </div>
    </v-card>  
</template>

<script>
import { baseURL } from '@/baseURL';

export default {
    name: "Customers",
    data() {
        return{
            drawer: false,
            drawerCustomerAccount: true,
            dialogDelete: false,
            dialogEdit: false,
            search: ' ',
            columns : [
                {text: 'ID', value: 'id', class:'blue darken-2 white--text'},
                {text: 'ADDRESS', value:'address', class:'blue darken-2 white--text'},
                {text: 'COUNTRY', value:'country', class:'blue darken-2 white--text'},
                {text: 'LAST NAME', value:'customerLastname', class:'blue darken-2 white--text'},
                {text: 'NAME', value:'customerName', class:'blue darken-2 white--text'},
                {text: 'DISTRICT', value:'district', class:'blue darken-2 white--text'},
                {text: 'DNI', value:'dni', class:'blue darken-2 white--text'},
                {text: 'EMAIL', value:'email', class:'blue darken-2 white--text'},
                {text: 'ACTIONS', value: 'actions', class:'blue darken-2 white--text', sortable: false}
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

    },
    methods: {
        register (){
            this.axios.post(baseURL + 'users/1/customers',{
                customerName: this.customerName,
                customerLastname: this.customerLName,
                address: this.address,
                country: this.country,
                district: this.district,
                dni: this.dni,
                email: this.email,
            

            }).then(() => {
                this.axios.get(baseURL + 'users/1/customers').then(res =>{
                    console.log(res);
                    this.customers = res.data.content;
                    this.$swal.fire(
                        'Nice',
                        'Customer registered successfully!',
                        )
                    this.drawer = false;
                    this.drawerCustomerAccount = true;
                })
            //this.$parent.refresh();
            }).catch(error => {
                    this.$swal.fire({
                        icon: 'error',
                        title: `${error}`,
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
            })
        },
        cancelRegister (){
            this.drawer = false;
            this.customerName = null,
            this.customerLName = null,
            this.address = null,
            this.country = null,
            this.district = null,
            this.dni = null,
            this.email = null
        },
        deleteClient (id) {
            this.index = id;
            this.dialogDelete = true;
        },
        deleteItemConfirm () {
            this.axios.delete(baseURL+'users/1/customers/'+ this.index).then(response =>{
                console.log(response)}).then(() => {
                    this.axios.get(baseURL + 'users/1/customers').then(res =>{
                        this.customers = res.data.content;
                    })
                })
            this.closeDelete();
        },
        closeDelete () {
            this.dialogDelete = false;
        },
        editClient (id) {
            console.log(id);
            this.index = id;
            this.axios.get(baseURL+'users/1/customers/'+this.index).then(response => {
                console.log(response.data);
                this.customers = response.data;
                this.customerName = this.customers.customerName,
                this.customerLName = this.customers.customerLastname,
                this.address = this.customers.address,
                this.country = this.customers.country,
                this.district = this.customers.district,
                this.dni = this.customers.dni,
                this.email = this.customers.email
            })
            this.dialogEdit = true;
        },
        cancel (){
            this.drawer = false;
            this.customerName = null,
            this.customerLName = null,
            this.address = null,
            this.country = null,
            this.district = null,
            this.dni = null,
            this.email = null
            this.dialogEdit = false;
        },
        save (){
            this.axios.put(baseURL+'users/1/customers/'+this.index, {
                customerName: this.customerName,
                customerLastname: this.customerLName,
                address: this.address,
                country: this.country,
                district: this.district,
                dni: this.dni,
                email: this.email
            }).then(() =>{
                this.axios.get(baseURL + 'users/1/customers').then(res =>{
                        this.customers = res.data.content;
                });
                this.$swal.fire(
                    'Good job!',
                    'You edit the product',
                    'success'
                );
            }).catch(error => {
                    this.$swal.fire({
                        icon: 'error',
                        title: `${error}`,
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
            })
            this.dialogEdit = false;
        },
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
.canecel{
    position: relative;
    left: 100px;
}

.title-component{
    text-align: center;
    position: relative;
    top: 20px;
}
.bodegaap{
    height: 10%;
    width: 15%;
}
.subt-drawer{
    position: relative;
    top: 10px;
    left: 13px;
    color: black;
}
.customize-text{
    position: relative;
    left: 10px;
}

</style>