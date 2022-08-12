<template>
  <div v-if="products">
    <!-- <div> -->
    <div class="container">
      <div class="row mx-auto" v-for="product in products" :key="product.id" :product="product">
        <!-- <div class="col-4"> -->
        <div class="img-bg" :style="{'background-image': `url(${product.img})`,'background-size': '280px 350px'}">
        <div class="card" >
        <!-- <div :style="{'background-image': `url(${product.img})`, 
        , 'background-repeat': 'no-repeat','backdrop-filter':'blur(5px)','box-shadow': '0px 5px 25px var(--color-secondary)','background-color': 'var(--color-)',}"> -->
        <router-link :to="{name: 'single', params: { id: product.product_id }}">

          <img :src="product.img" class="img-hoodies img-fluid rounded mx-auto d-block"/>
          <br />
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
      </div>
      <!-- {{product.title}}
            
            {{product.description}} -->
    <!-- </div> --></div>
  </div>
  <div v-else>No products to display</div>
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
  width: 100px;
  height: 150px;
  border-radius:5px;
  /* margin:auto; */
}
.img-bg{
    height:350px;
    width:280px;
    border-radius:5px;
    box-shadow: 0px 5px 25px var(--color-secondary);
    backdrop-filter: blur(5px);
    background-color: var(--color-)
}
.card {
  height: 350px;
  width: 280px;
  box-shadow: 0px 5px 25px var(--color-primary);
  margin:-12px;
  margin-top:0;
  backdrop-filter: blur(5px);
  background-color: var(--color-);
}

</style>
