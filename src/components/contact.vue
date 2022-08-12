<template>
  <div id="contact">
    <div class="img-fluid container-fluid">
      <!-- <div class="card2 opacity-75">
                <h1 class="display-6 lead text-center">𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐔𝐒</h1>
                <hr>
                <p class="h1 lead text-center">
                    𝐅𝐞𝐞𝐥 𝐅𝐫𝐞𝐞 𝐓𝐨 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐎𝐫 𝐒𝐞𝐧𝐝 𝐀 𝐄𝐦𝐚𝐢𝐥 𝐓𝐨 𝐔𝐬 𝐀𝐧𝐝 𝐖𝐞'𝐥𝐥 𝐆𝐞𝐭 𝐁𝐚𝐜𝐤 𝐓𝐨 𝐘𝐨𝐮 𝐖𝐡𝐞𝐧𝐞𝐯𝐞𝐫 𝐖𝐞 𝐂𝐚𝐧.
                </p>
            </div> -->
      <div class="card">
        <div class="row ps-5 ms-5">
          <div class="col-5" id="left">
            <div class="row">
              <div class="col-12">
                <h4 class="h6 text-start">Name</h4>
                <input placeholder="Enter Name" required />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h4 class="h6 text-start">Email</h4>
                <input placeholder="Enter Email" />
              </div>
            </div>
            <div class="row pe-3">
              <div class="col-12">
                <h4 class="h6 text-start">Message</h4>
                <input class="message" placeholder="Enter Message" />
              </div>
            </div>
          </div>
          <div class="vr"></div>
          <div class="col-5 ps-5 mx-5">
            <div id="right">
              <h5>𝐄𝐦𝐚𝐢𝐥:</h5>
              <h6 class="lean">RM~HOODIESonline@gmail.com</h6>
              <h5>𝐂𝐨𝐧𝐭𝐚𝐜𝐭:</h5>
              <h6 class="lean">081 496 3622</h6>
              <h6 class="lean">087 946 6259</h6>
              <h5>𝐎𝐮𝐫 𝐒𝐨𝐜𝐢𝐚𝐥𝐬:</h5>
              <h6 class="logo">
                <img
                  class="mx-3"
                  src="https://i.postimg.cc/pXtHGXqx/104478-blogger-google-blog-icon.png"
                />
                <img
                  src="https://i.postimg.cc/vHLdpFNn/104498-facebook-icon.png"
                />
                <img
                  class="mx-3"
                  src="https://i.postimg.cc/GmXnmPrh/104501-twitter-bird-icon.png"
                /><br />
                <img
                  class="mx-3 my-3"
                  src="https://i.postimg.cc/VkfcwGxV/211929-social-youtube-icon.png"
                />
                <img
                  src="https://i.postimg.cc/1zTxp9fk/5279116-pin-pinterest-inspiration-pinterest-logo-icon.png"
                />
                <img
                  class="mx-3"
                  src="https://i.postimg.cc/LshKYq6k/9023675-instagram-logo-fill-icon.png"
                />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
:root {
  --color-primary: #6ad11c;
  --color-secondary: rgba(0, 0, 0, 0.66);
  --color-white: #e3e8e3;
  --color-black: #030910;
  --color-dark: #1b5512;
  --color-gray: #7f9679;

  --font-Poppins: "Poppins", sans-serif;
  --font-Raleway: "Raleway", sans-serif;
  --font-OpenSans: "Open Sans", sans-serif;

  --font-xlg: 90px;
  --font-lg: 64px;
  --font-md: 35px;
  --font-sm: 15px;
  --font-xs: 9px;

  --size-lg: 1280px;
  --size-md: 976px;
  --size-sm: 768px;
  --size-xs: 500px;
  --size-ms: 200px;
}
* {
  padding: 0;
  margin: 0;
}

.container-fluid {
  /* padding-top:70px; */
  /* background-color:var(--color-white); */
  height: 50%;
  width: 100%;
  /* margin-left:5%; */
}
img {
  height: 45px;
  width: 45px;
}
input {
  height: 50px;
  /* width:270px; */
  width: 95%;
  border-color: var(--color-white);
}
p {
  color: var(--color-secondary);
}
.img-fluid {
  background-image: url("https://i.postimg.cc/c1f81pZT/green-and-black-aesthetic-android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-jwj9n-2.jpg");
  width: 100%;
  height: 90vh;
  /* padding-top:10px; */
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 5px 25px var(--color-secondary);
  backdrop-filter: blur(5px);
  background-color: var(--color-);
}
.message {
  height: 170px;
  /* width: 550px; */
  width: 100%;
}
.h6 {
  margin-top: 30px;
  padding-bottom: 15px;
  color: var(--color-white);
}
span {
  color: var(--color-gray);
}
.vr {
  color: var(--color-gray);
  height: 450px;
  width: 2px;
}
hr {
  border-top: 2px solid;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  color: var(--color-secondary);
}
.card {
  height: 100%;
  width: 100%;
  box-shadow: 0px 5px 25px var(--color-dark);
  margin-left: auto;
  margin-right: auto;
  padding-top: 90px;
  backdrop-filter: blur(5px);
  background-color: var(--color-);
}
h1 {
  color: var(--color-primary);
  font-size: var(--font-md);
}
h5 {
  padding-top: 20px;
  margin-left: 10px;
  padding-bottom: 10px;
  color: var(--color-white);
}
h6 {
  padding-left: 10px;
  color: var(--color-white);
  /* padding-bottom:10px */
}
.card2 {
  height: 117px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25%;
  box-shadow: 0px 15px 35px var(--color-dark);
  background-color: var(--color-dark);
  border-radius: 6px;
}
.lean {
  font-size: var(--font-sm);
}
#left {
  /* background-color: var(--color-white); */
  padding-right: auto;
  padding-left: auto;
}
@media screen and (max-width:442px){
.logo {
    width: 300px;
    margin-left:-10%;
    padding-right:100%
  }
  #right {
    margin-left: -100%;
    width:100px;
    /* padding-right:100% */
  }
}

@media screen and (max-width:351px){
#right{
    margin-left:-200%;
}
}
@media screen and (max-width: 686px) {
  .row {
    margin-left: 5%;
  }
  .vr {
    color: #7f967900;
  }
  .img-fluid {
    background-image: url("https://i.postimg.cc/xjZXh3TW/green-and-black-aesthetic-android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-jwj9n-3.jpg");
    height: auto;
    width: 100%;
  }
  input {
    width: 160%;
  }
  .message {
    width: 195%;
  } 
  .card {
    padding-bottom: 10px;
  }
  #contact {
  overflow-x: hidden !important;
}
}
</style>
<!-- <div>
https://i.postimg.cc/6prfxTzh/mask-neon-light-illuminated-face-3.jpg
    <a href="/help"><img src="https://i.postimg.cc/pXtHGXqx/104478-blogger-google-blog-icon.png"><br>
	<a href="/help"><img src="https://i.postimg.cc/vHLdpFNn/104498-facebook-icon.png"><br>
	<a href="/help"><img src="https://i.postimg.cc/GmXnmPrh/104501-twitter-bird-icon.png"></a><br>
	<a href="/help"><img src="https://i.postimg.cc/VkfcwGxV/211929-social-youtube-icon.png"></a><br>
	<a href="/help"><img src="https://i.postimg.cc/1zTxp9fk/5279116-pin-pinterest-inspiration-pinterest-logo-icon.png"></a><br>
	<a href="/help"><img src="https://i.postimg.cc/LshKYq6k/9023675-instagram-logo-fill-icon.png"></a> 
</div> -->
