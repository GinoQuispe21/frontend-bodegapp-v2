<template>
    <v-card height="100%">
        <v-toolbar color="bg-warning" dark>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text to="/" class="text-info">
                    Cerrar Sesión
                </v-btn>
                <v-divider vertical></v-divider>
            </v-toolbar-items>
        </v-toolbar>
        <v-tabs color="bg-info"  vertical>
            <v-tab class="text-info bg-success">
                Register Product
            </v-tab>
            <v-tab class="text-info bg-warning">
                Register Client
            </v-tab>
            <v-tab-item>
                <register-product></register-product>
            </v-tab-item>
             <v-tab-item>
                <register-client></register-client>
            </v-tab-item>
        </v-tabs>
    </v-card>
</template>

<script>
import RegisterClient from './RegisterClient.vue'
import RegisterProduct from './RegisterProduct.vue'
export default {
    name: 'HomePage',
    components: { RegisterProduct, RegisterClient },
    mounted(){

  }
    
}
</script>

<style scooped lang="scss">

</style>