<template>
<div>
  <Nav/>
<router-view/>
<Footer/></div>
</template>

<script>
import Footer from "@/components/footer.vue"
import Nav from "./components/navbar.vue";
export default{
  components:{
    Nav,
    Footer
}
}
</script>
<style>
:root {
    --color-primary: #50a117;
    --color-secondary: black;
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
body{
  background-color:var(--color-secondary);
  overflow-x: hidden;

}
*{
  margin: 0;
  padding: 0;
}
</style>
