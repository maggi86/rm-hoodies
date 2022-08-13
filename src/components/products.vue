<template>
  <div v-if="products">
    <!-- <div> -->
    <div class="container">
      <div class="row mx-auto " >
        <!-- <div class="col-4"> -->
          <div class="img-bg mx-auto m-3 p-0" :style="{'background-image': `url(${product.img})`,'background-size': '290px 350px','backdrop-filter':'blur(5px)','box-shadow': '0px 5px 25px var(--color-secondary)', 'opacity':'25','background-color': 'var(--color-)'}" v-for="product in products" :key="product.id" :product="product" style="width: 17rem;">
        <div class="card p-2">
        <!-- <div :style="{'background-image': `url(${product.img})`, 
         'background-repeat': 'no-repeat'> -->
        <router-link :to="{name: 'single', params: { id: product.product_id }}">

          <img :src="product.img" class="img-hoodies d-block rounded mx-auto my-auto"/>
          <!-- <br /> -->
          <p>R{{ product.price }}</p>
          <!-- </div> -->
          <!-- <div class="col-4">
                        <div class="card">
                            <img :src="product.img" class="img-hoodies img-fluid">
                            <br>
                            <p>R{{product.price}}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <img :src="product.img" class="img-hoodies img-fluid">
                            <br>
                            <p>R{{product.price}}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card">
                            <img :src="product.img" class="img-hoodies img-fluid">
                            <br>
                            <p>R{{product.price}}</p>
                        </div>
                    </div> -->
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
.img-hoodies {
  width: 200px; 
  height: 260px;
  box-shadow: 0px 15px 25px var(--color-secondary);
  border-radius:5px;

}
.img-bg{
    /* background-repeat: no-repeat; */
    /* background-size: ; */
      height:350px;
      width:270px;
      border-radius:5px;
      box-shadow: 0px 5px 25px var(--color-primary);
      backdrop-filter: blur(5px);
      /* background-color: var(--color-) */
  }

.card {
  height: 350px;
  width: 272px;
  /* padding-top:20px; */
  box-shadow: 0px 5px 25px var(--color-primary);
  /* padding-left:-20px; */
  /* margin-top:0; */
  backdrop-filter: blur(8px);
  background-color: var(--color-);
}
p{
  color: var(--color-secondary);


}
</style>
