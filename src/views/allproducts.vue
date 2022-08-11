<template>
    <div v-if="products">
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.title}}
                <img :src="product.img" class="img-hoodies img-fluid">
                {{product.description}}
                R{{product.price}}
            </li>
        </ul>
    </div>
    <div v-else>No products to display</div>
</template>
<style scoped>
.img-hoodies{
    width: 200px;
    height: 250px;
    border-radius: 30px;
    padding: 10px;
}
</style>
<script>
    export default{
        mounted(){
            this.$store.dispatch("products")
        },
        computed:{
            products(){
                return this.$store.state.prods
            }
        }
    }
</script>