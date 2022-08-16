<template>

<!-- <nav class="navbar navbar-expand-sm sticky-top">
    <div class="container-fluid"> 
        <img src="https://i.postimg.cc/8zJVmgyS/rm-Hoodies.png" class="navLogo" >
    </div>
    
    <div class="navIn">
        <ul>
            <a href="/">𝐇𝐨𝐦𝐞</a> 
        </ul>
        <ul>
            <a href="/all">𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</a> 
        </ul>
        <ul>
          <a href="/login">𝐋𝐨𝐠𝐢𝐧</a>
        </ul>
        <ul>
          <a href="/register">𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫</a>
        </ul>
        <ul>
            <a href="/contact">𝐂𝐨𝐧𝐭𝐚𝐜𝐭</a> 
        </ul>
    </div>
</nav> -->
<!--<nav class="navbar navbar-expand-md">
   <div class="container-fluid">
    <a class="navbar-brand" href="/profile">
        <img src="https://i.postimg.cc/8zJVmgyS/rm-Hoodies.png" class="navLogo" >
    </a>
    <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav navIn">
        <ul>
          <a href="/login">𝐋𝐨𝐠𝐢𝐧</a>
        </ul>
        <ul>
          <a href="/register">𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫</a>
        </ul>
      </ul>
    </div>
  </div>
</nav> -->

<Home/>

</template>

<script>
// @ is an alias to /src
import Home from '@/components/home.vue'
import NAV from '@/components/homenav.vue'

export default {
  name: 'HomeView',
  components: {
    Home,
    NAV
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
.navbar{
    background-color: var(--color-secondary);
    min-height:10vh;
}
.navLogo{
    margin-left: 20px;
    height:60px;
    width:65px;
}
.navIn{
    font-weight:bold;
    display:flex;
    justify-content:flex-end;
    padding-right:20px;
}
a:hover{
    color:var(--color-dark) !important;
    text-decoration:none !important;
}
a{
    text-decoration:none !important;
    color:var(--color-primary) !important;
    font-size:18px !important;
}
</style>

<!-- https://i.postimg.cc/3NBXd6M4/157406159928106a64b0ed0fd9d15eed92351f70e7-thumbnail-900x.webp
Letter Graphic Drawstring Hoodie
Men 
R267
https://i.postimg.cc/rySgBnHL/16067876238bc48c78287155878e7f8dde91fbead9-thumbnail-900x.webp
Graphic Tie Dye Pouch Pocket Drawstring Hoodie
men
R347
https://i.postimg.cc/vmk3spMG/1628128919a77169b86e9b913b17dc061075c2f668-thumbnail-900x.webp
Purple Anime Hoodless Hoodie
Women
R375
https://i.postimg.cc/FzgZ0zSK/16303195861d4fcb03dc4e4a09039f8e7e8e977381-thumbnail-900x.webp
Astronaut & Letter Graphic Thermal Hoodie
Men
R316
https://i.postimg.cc/fyZ7WsPQ/1630322663479ae34e544773be1f4eb9b25a5a5184-thumbnail-900x.webp
Japanese Letter & Chinese Dragon Print Drawstring Hoodie
Men
R292
https://i.postimg.cc/3NH1ymd6/16304879698ae334dbd828b94827b3a46e14dbcb44-thumbnail-900x.webp
Bear Patched Kangaroo Pocket Drawstring Thermal Hoodie
Men
R316
https://i.postimg.cc/FHqjd36Z/163089516061673aed55b8f0265480d4c407d83ca9-thumbnail-900x.webp
Embroidery Tie Dye Teddy Hoodie
men
R331

https://i.postimg.cc/J4MKM3wH/1632980638ebb5534584aca98f56dc6cabd0250fc8-thumbnail-900x.webp
Blue Embroidery Tie Dye Teddy Hoodie
men
R331
https://i.postimg.cc/3J1kNwF1/zwelto1640082717831.webp
Demon Slayer Tengen Uzui Hoodie Anime 100% Polyester Anime Harajuku Graphic Kawaii Hoodie
Women
R315
https://i.postimg.cc/WbNmQ2rM/16341873704078fe6f57d924049eca948524269f14-thumbnail-900x.webp
Floral & Japanese Letter Graphic Two Tone Drawstring Thermal Hoodie
Men
R221
https://i.postimg.cc/QdMbWXdX/16351296996ab35d7747954691ff6a68e1364ec815-thumbnail-900x.webp
Slogan & Butterfly Graphic Kangaroo Pocket Drop Shoulder Hoodie
Men,Women
R202
https://i.postimg.cc/YCyx6JvQ/16366802242bf52fcdaba872934a0f486f16e8e05a-thumbnail-900x.webp
Two Tone Graphic Print Kangaroo Pocket Drawstring Hoodie
Men
R277
https://i.postimg.cc/SKqC5Pd1/1641267003db6b85b136d107eee8d47aa0245a7054-thumbnail-900x.webp
Bear And Slogan Graphic Drawstring Thermal Lined Hoodie
kids
R199
https://i.postimg.cc/7Y996CDs/16394481772ccf0dcc27bef2db5e73b309fc7817a9-thumbnail-900x.webp
Slogan & Butterfly Print Kangaroo Pocket Drawstring Thermal Hoodie
Women
R199
https://i.postimg.cc/sX59RxwJ/163964936228a443c4220937e3281ec4be79c79a37-thumbnail-900x.webp
Letter & Cartoon Face Print Drawstring Thermal Lined Hoodie
Women
R192
https://i.postimg.cc/W4FwXXZC/1639710205233d6cab2d65bb9eefae93a27ee2dc44-thumbnail-900x.webp
Letter & Expression Print Drawstring Thermal Hoodie
Kids
R199
https://i.postimg.cc/Qt7Sx0x1/1641376370ce60189ff7cd2f5f77e7570f3b4f8eb8-thumbnail-900x.webp
Expression & Letter Graphic Drawstring Thermal Hoodie
Kids
R199
https://i.postimg.cc/59qq7HH4/16557025999320b7b88d409dfaba3506350e2563cb-thumbnail-900x.webp
Butterfly And Letter Graphic Kangaroo Pocket Thermal Lined Drawstring Hoodie
Women
R215
https://i.postimg.cc/pXJGFGQB/oovofv1632365844990.webp
Jujutsu Kaisen Yuji Itadori Anime Cartoon Polyster Print Harajuku Graphic Kawaii Hoodie
men,women
R499
https://i.postimg.cc/Y2XQjR3J/oaspkh1636630385166.webp
Frogpond Graphic Print Kagaroo Pocket Drawstring Hoodie
Women
R295
https://i.postimg.cc/c6yr3K5k/16086171164d23e19d07b75f66d4e2c635330b234d-thumbnail-900x.webp
Slogan Graphic Drawstring Hoodie
Women
R157-->
