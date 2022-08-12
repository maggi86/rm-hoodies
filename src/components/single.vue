<template>
<div v-if="product">
<h2>{{product.price}}</h2>
</div>
</template>
<script>
    export default{
        props: ["product_id"],
        mounted(){
            this.$store.dispatch("getProduct")
        },
        computed:{
            product(){
                return this.$store.state.prod
            }
        }
    }
</script>