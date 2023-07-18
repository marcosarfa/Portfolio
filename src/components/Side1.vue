<template>
  <div class="side">
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="https://pngimg.com/uploads/at_sign/at_sign_PNG49.png" alt="e-mail">
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> </p>
            <a href="mailto:marcosarfa@gmail.com" type="button">marcosarfa@gmail.com</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="https://th.bing.com/th/id/R.781fb62712e587f4d0ff24118a44f107?rik=6fr66Qxl08MJKg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_24814.png&ehk=aaol0%2bXIhWAgCgsSVGi96vYYkl4K0rgpFdYCPvvzc%2fA%3d&risl=&pid=ImgRaw&r=0" alt="Linkedin">
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <a href="https://www.linkedin.com/in/marcosafabian/" target="_blank" type="button">/marcosafabian</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="GitHub">
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p> </p>
            <a href="https://github.com/marcosarfa" target="_blank" type="button">/marcosarfa</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.side{
  position: sticky;
  top: 30%;
  margin-right: 10%;
}

.card {
  background: transparent;
  border: 0px;
}

.container {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

.container .card {
  position: relative;
}

.container .card .face {
  width: 160px;
  height: 100px;
  transition: .4s;

}

.container .card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(0px);
}

.container .card:hover .face.face1 {
  transform: translateY(0);
  box-shadow:
    inset 0 0 60px whitesmoke,
    inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff,
    inset 20px 0 300px #f0f,
    inset -20px 0 300px #0ff,
    0 0 50px #fff,
    -10px 0 80px #f0f,
    10px 0 80px #0ff;

}


.container .card .face.face1 .content {
  opacity: .2;
  transition: 0.5s;
  text-align: center;
}

.container .card:hover .face.face1 .content {
  opacity: 1;
}

.container .card .face.face1 .content i {
  font-size: 3em;
  color: white;
  display: inline-block;

}

.container .card .face.face1 .content h3 {
  font-size: 1em;
  color: white;
  text-align: center;
}

.container .card .face.face1 .content a {
  transition: .5s;
}

.container .card .face.face2 {
  position: relative;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .8);
  transform: translateY(-100px);
}

.container .card:hover .face.face2 {
  transform: translateY(0);
}

.container .card .face.face2 .content p,
a {
  font-size: 10pt;
  margin: 0;
  padding: 0;
  color: #333;
}

.container .card .face.face2 .content a {
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  outline: 1px dashed #333;
  padding: 10px;
  /* margin: 15px 0 0; */
  display: inline-block;
}

.container .card .face.face2 .content a:hover {
  background: #333;
  color: whitesmoke;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.content img{
  width: 20%;
}

@media (max-width: 1200px){

.side{
  margin-right: 5%;
}

}

@media (max-width: 1035px){

.side{
  display: none;
}
}
</style>