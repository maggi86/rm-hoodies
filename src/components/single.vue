<template>
<div id="about">
  <div v-if="product">
        <div class="container-fluid d-flex justify-content-center">
            <div class="column">
                <div class="row-md-6 ">
                    <p id="info">{{ product[0].title }}</p>
                    <div class="view">
                        <div class="square">
                            <img
                              :src="product[0].img"
                              class="face front d-block rounded mx-auto my-auto"
                            /><img
                              :src="product[0].img"
                              class="face right d-block rounded mx-auto my-auto"
                            />
                            <img
                              :src="product[0].img"
                              class="face left d-block rounded mx-auto my-auto"
                            />
                            <img
                              :src="product[0].img"
                              class="face back d-block rounded mx-auto my-auto"
                            />
                        </div>
                    </div>
                </div>
                <div class="row-md-6">
                    <div class="container">
                        <div class="column">
                            <div class="row">
                                <div class="col-md-6">
                                    <p>  Price:</p>
                                </div>
                                <div class="col-md-6">
                                    <p id="display">
                                        R{{ product[0].price}}
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <p>  Description:</p>
                                </div>
                                <div class="col-md-6">
                                    <p id="display">
                                        {{ product[0].description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <!-- <p>{{product.img}}</p> -->
    </div>
  <div v-else>No products to display</div>
</div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.prod;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>
<style scoped>
:root {
    --color-primary: #6ad11c;
    --color-secondary: rgba(0, 0, 0, 0.66);
    --color-white: #e3e8e3;
    --color-black: #030910;
    --color-dark: #1b5512;
    --color-gray: #7f9679;


    --font-Poppins: 'Poppins', sans-serif;
    --font-Raleway: 'Raleway', sans-serif;
    --font-OpenSans: 'Open Sans', sans-serif;

	--font-xlg: 90px;
    --font-lg: 64px;
    --font-md: 24px;
    --font-sm: 15px;
    --font-xs: 9px;

    --size-lg: 1280px;
    --size-md: 976px;
    --size-sm: 768px;
    --size-xs: 500px;
	--size-ms: 200px;
}
.container-fluid{
  background-image: url("https://i.postimg.cc/c1f81pZT/green-and-black-aesthetic-android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-jwj9n-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 15px 25px var(--color-dark);
}
.view {
  width:14em;
  height:14em;
  perspective:50em;
  /* margin-left: 3px; */
  display: flex;
  margin-bottom: 100px;
  margin-left:18%; 
}

.square {
  width:100%;
  height:120%;
  position:relative;
  animation: spinning ease-in-out 5s infinite;
  transform-style:preserve-3d;
  margin-top: 10%;

}
#info{
  margin-top: 10px; 
  margin-left:25%; 
  font-size:23px;
  color:var(--color-primary);
  font-weight:bold;
  width:300px;
}
#display{
    font-size:20px;
    color:var(--color-secondary);
    font-weight:bold;
    width:300px;
}
.row{
    font-size:larger;
    color:var(--color-secondary);
    padding-left:20px
}
.face {
  width:100%;
  height:100%;
  position:absolute;
  line-height:14em;
  /* text-align:center; */
}
.front  { transform: rotateY(0deg)   }
.right  { transform: rotateY(90deg)  }
.left   { transform: rotateY(-90deg) }
.back   { transform: rotateY(180deg) }
.front  { transform: rotateY(0deg) translateZ(7em); }
.right  { transform: rotateY(90deg) translateZ(7em);  }
.left   { transform: rotateY(-90deg) translateZ(7em); }
.back   { transform: rotateY(180deg) translateZ(7em); }
@keyframes spinning {
  from  { transform: translateZ(-5em) rotateY(0deg);   }
  to    { transform: translateZ(-5em) rotateY(360deg); }
}

@media screen and (max-width:686px){
  #about {
  overflow-x: hidden !important;
}
}
</style>