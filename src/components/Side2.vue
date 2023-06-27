<template>
    <div class="side">
      <div class="container cont1">
        <div class="card" >
          <div class="face face1">
            <div class="content">
              <router-link class="button-43" to="/">{{ $t('side.projects') }} </router-link>
              <!-- <button class="button-43" role="button">Mis Proyectos</button> -->
              <!-- <a href="">Mis Proyectos</a> -->
              <!-- <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt=""> -->
            </div>
          </div>

        </div>
      </div>
  
      <div class="container cont2">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <a href="https://drive.google.com/file/d/1CqhnAdkkkHjfnQHAz0a-QqHCb3Tx1cw0/view?usp=drive_link" class="button-43" target="_blank"> {{ $t('side.cv') }}</a>
              <!-- <button class="button-43" role="button">Mi Curriculum</button> -->
              <!-- <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt=""> -->
            </div>
          </div>

        </div>
      </div>
    </div>
  </template>
  <style scoped>
  
  .side{
    position: sticky;
    top: 38%;
    margin-left: 10%;
  }
  
  .card {
    background: transparent;
    border: 0px;
  }
  
  /* .cont1{
    margin-bottom: 75%;
  } */

  .container {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 70%;
  }
  
  .container .card {
    position: relative;
  }
  
  .container .card .face {
    width: 150px;
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
    /* transform: translateY(0px); */
  }
  
  .container .card:hover .face.face1 {
    /* transform: translateY(0); */
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
  
  .container .card .face.face1 .content a {
    transition: .5s;
  }
  
  .container .card .face {
    position: relative;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, .8);
    /* transform: translateY(-100px); */
  }
  
  .container .card .face .content  {
    text-decoration: none;
    color: black;
    box-sizing: border-box;
    /* outline: 1px dashed #333; */
    padding: 10px 5px;
    /* margin: 15px 0 0; */
    display: inline-block;
  }
  
  .container .card .face .content  {
    /* background: #333; */
    /* color: whitesmoke; */
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  
  .button-43 {
    background: rgba(255, 255, 255, 0);
    border-radius: .5rem;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-size: 16px;
    justify-content: center;
    padding: 1rem 1.75rem;
    text-decoration: none;
    font-weight: bolder;
    width: 100%;
    border: 0;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  /* .button-43:hover {
    background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
  }
   */
  @media (min-width: 768px) {
    .button-43 {
      padding: 1rem 2rem;
    }
  }
  </style>

  <!-- HTML !-->


