<template>
<nav class="navbar navbar-expand-md">
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
      </ul>
    </div>
  </div>
</nav>

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
</template>
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

/* @media screen and (max-width:576px),(min-width: 300px) {
    .navbar{
        align-self:auto center;
        height:100px;
        justify-content:center;
    }
    ul{
        margin:0;
        padding:5px; 
    }
    a{
        /* font-size:12px; 
        

    }
    .navLogo{
        margin:auto;
        height:60px;
        width:65px;
    }
} */
</style>