<template>
<div>
<div id="container">
    <figure>
        <img src="https://i.postimg.cc/3NBXd6M4/157406159928106a64b0ed0fd9d15eed92351f70e7-thumbnail-900x.webp" alt="Profile 1" height="600px" width="400px">
        <img src="https://i.postimg.cc/rySgBnHL/16067876238bc48c78287155878e7f8dde91fbead9-thumbnail-900x.webp" alt="Profile 2" height="600px" width="400px">
        <img src="https://i.postimg.cc/vmk3spMG/1628128919a77169b86e9b913b17dc061075c2f668-thumbnail-900x.webp" alt="Profile 3" height="600px" width="400px">
        <img src="https://i.postimg.cc/fyZ7WsPQ/1630322663479ae34e544773be1f4eb9b25a5a5184-thumbnail-900x.webp" alt="Profile 5" height="600px" width="400px">
        <img src="https://i.postimg.cc/3NH1ymd6/16304879698ae334dbd828b94827b3a46e14dbcb44-thumbnail-900x.webp" alt="Profile 6" height="600px" width="400px">
        <img src="https://i.postimg.cc/FHqjd36Z/163089516061673aed55b8f0265480d4c407d83ca9-thumbnail-900x.webp" alt="Profile 7" height="600px" width="400px">
        <img src="https://i.postimg.cc/3NBXd6M4/157406159928106a64b0ed0fd9d15eed92351f70e7-thumbnail-900x.webp" alt="Profile 1" height="600px" width="400px">
        <img src="https://i.postimg.cc/rySgBnHL/16067876238bc48c78287155878e7f8dde91fbead9-thumbnail-900x.webp" alt="Profile 2" height="600px" width="400px">
        <img src="https://i.postimg.cc/vmk3spMG/1628128919a77169b86e9b913b17dc061075c2f668-thumbnail-900x.webp" alt="Profile 3" height="600px" width="400px">
        <img src="https://i.postimg.cc/fyZ7WsPQ/1630322663479ae34e544773be1f4eb9b25a5a5184-thumbnail-900x.webp" alt="Profile 5" height="600px" width="400px">
        <img src="https://i.postimg.cc/3NH1ymd6/16304879698ae334dbd828b94827b3a46e14dbcb44-thumbnail-900x.webp" alt="Profile 6" height="600px" width="400px">
    </figure>
</div>
<div id="container2">
    <figure>
        <img src="https://i.postimg.cc/mgZdNY8W/163118594017ad4de9cfac0960212e75728f23d3fc-thumbnail-900x.webp" alt="Profile 1" height="600px" width="400px">
        <img src="https://i.postimg.cc/J4MKM3wH/1632980638ebb5534584aca98f56dc6cabd0250fc8-thumbnail-900x.webp" alt="Profile 2" height="600px" width="400px">
        <img src="https://i.postimg.cc/WbNmQ2rM/16341873704078fe6f57d924049eca948524269f14-thumbnail-900x.webp" alt="Profile 3" height="600px" width="400px">
        <img src="https://i.postimg.cc/QdMbWXdX/16351296996ab35d7747954691ff6a68e1364ec815-thumbnail-900x.webp" alt="Profile 5" height="600px" width="400px">
        <img src="https://i.postimg.cc/YCyx6JvQ/16366802242bf52fcdaba872934a0f486f16e8e05a-thumbnail-900x.webp" alt="Profile 6" height="600px" width="400px">
        <img src="https://i.postimg.cc/0Nbch9Tt/1638164949a217b42b6ff3c9619fa9b73dec02c80d-thumbnail-900x.webp" alt="Profile 7" height="600px" width="400px">
        <img src="https://i.postimg.cc/mgZdNY8W/163118594017ad4de9cfac0960212e75728f23d3fc-thumbnail-900x.webp" alt="Profile 1" height="600px" width="400px">
        <img src="https://i.postimg.cc/J4MKM3wH/1632980638ebb5534584aca98f56dc6cabd0250fc8-thumbnail-900x.webp" alt="Profile 2" height="600px" width="400px">
        <img src="https://i.postimg.cc/WbNmQ2rM/16341873704078fe6f57d924049eca948524269f14-thumbnail-900x.webp" alt="Profile 3" height="600px" width="400px">
        <img src="https://i.postimg.cc/QdMbWXdX/16351296996ab35d7747954691ff6a68e1364ec815-thumbnail-900x.webp" alt="Profile 5" height="600px" width="400px">
        <img src="https://i.postimg.cc/YCyx6JvQ/16366802242bf52fcdaba872934a0f486f16e8e05a-thumbnail-900x.webp" alt="Profile 6" height="600px" width="400px">
    </figure>
</div>
</div>
</template>

<style scoped>
*{
  margin:0;
  padding:0;
}
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
    --font-md: 26px;
    --font-sm: 15px;
    --font-xs: 9px;

    --size-lg: 1280px;
    --size-md: 976px;
    --size-sm: 768px;
    --size-xs: 500px;
	--size-ms: 200px;
}

#container {
  width: 100%;
  height: 60vh;
  /* margin: 20px auto; */
  overflow: hidden;
  position: relative;
  float:right;
}
#container figure {
  position: absolute;
  width: 300%;
  animation: 4s slide ease-in-out infinite;
}
#container figure img {
  /* width: 25%;
  height:100%; */
  float: right;

}
@keyframes slide {
  from{
    right:-11%;
  }
  to{
    right: -169%;
  }
}
#container2 {
  width: 100%;
  height: 60vh;
  overflow: hidden;
  position: relative;
  float:left;
}
#container2 figure {
  position: absolute;
  width: 300%;
  animation: 4s Slide ease-in-out infinite;
}
#container2 figure img {
  /* width: 25%;
  height:100%; */
  float: left;

}
@keyframes Slide {
  from{
    left: -11%;
    /* -12.8% */
  }
  to{
    left: -169%;
  }
}
@media screen and (max-width:800px) {
#container figure {
  width: 350%;
}
#container2 figure {
  width: 350%;
}
  
}
</style>