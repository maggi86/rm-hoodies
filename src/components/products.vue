<template>
  <div v-if="products">
    <!-- <div> -->
    <div class="container">
      <div class="row mx-auto" >
        <!-- <div class="col-4"> -->
          <div class="img-bg mx-5 m-3" :style="{'background-image': `url(${product.img})`,'background-size': '292px 383px','backdrop-filter':'blur(5px)','box-shadow': '0px 5px 25px var(--color-secondary)', 'opacity':'25','background-color': 'var(--color-)'}" v-for="product in products" :key="product.id" :product="product" style="width: 17rem;">
        <div class="card p-3">
        <!-- <div :style="{'background-image': `url(${product.img})`, 
         'background-repeat': 'no-repeat'> -->
        <router-link :to="{name: 'single', params: { id: product.product_id }}">
        <div id="flip">
        <div id="before"><img :src="product.img" class="img-hoodies d-block rounded mx-auto my-auto"/></div>
          <div id="after"><img :src="product.img" class="img-hoodies d-block rounded mx-auto my-auto"/><p class="lead text-center pt-3">{{ product.title }}</p><p class="lead text-center">R{{ product.price }}</p></div></div>
          <!-- <br /> -->
          
          <!-- </div> -->
        </router-link> 
        </div>
        </div>
      <!-- </div> -->
      <!-- {{product.title}}
            
            {{product.description}} -->
          </div>
      </div>
    </div>    
  <!-- </div> -->
  <div v-else>
    No products to display
    </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("products");
  },
  computed: {
    products() {
      return this.$store.state.prods;
    },
  },
};
</script>

<style scoped>
.container{
  padding-left:7%;
  padding-bottom:2%;
}
.img-hoodies {
  width: 200px; 
  height: 260px;
  box-shadow: 0px 20px 25px var(--color-secondary);
  border-radius:5px;

}
.img-bg{
    /* background-repeat: no-repeat; */
    /* background-size: ; */
      /* height:380px;
      width:350px; */
      border-radius:5px;
      box-shadow: 0px 5px 25px var(--color-primary);
      /* backdrop-filter: blur(5px); */
      /* background-color: var(--color-) */
  }

.card {
  height: 383px;
  width: 272px;
  /* padding-top:20px; */
  box-shadow: 0px 5px 20px var(--color-primary);
  /* padding-left:20px; */
  margin-left:-12px;

  background-color: var(--color-);
}
.card:hover{
  backdrop-filter: blur(8px);  
}
.card:hover #flip{
  transform: rotateY(180deg);
}
#flip{
  position: relative;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  padding-left: 19px;
}
#before, #after{
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
}
#after{
  transform: rotateY(180deg);
  padding-left:20px
}
p{
  color: var(--color-secondary);
  font-weight:bold;
  font-size:15px;
}
a{
  text-decoration: none;
}
/* .container:hover #card{
    transform: rotateY(180deg);
} 
#card{
    width: 200px;
    height: 250px;
    position: relative;
    text-align: center;
    transition: transform 0.5s;
    transform-style: preserve-3d;}
        -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-backface-visibility: hidden;
}*/

@media screen and (max-width: 425px){
.container{
  padding-left: 10px;
}
}
</style>
