<template>

<Contact/>

</template>
<script>
import Contact from "@/components/contact.vue"

export default{
    components:{
        Contact
    }
}
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
*{
	background-color: var(--color-white) ;
}
</style>
