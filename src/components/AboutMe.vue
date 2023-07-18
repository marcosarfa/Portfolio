<template>
    <div class="p-3">
        <h3>{{ $t('about.ofMe') }}</h3>

        <p class="text-center">{{ $t('about.argentino') }}</p>
        <p class="text-center">{{ $t('about.agronomo') }}</p>
    </div>

    <div class="">
        <h4>{{ $t('about.tecnologias') }}</h4>
        <div class="d-flex justify-content-center flex-wrap">
            <div class="face1">
                <div id="contHtml">
                    <img id="html" src="../assets/img/html.png" alt="HTML">
                </div>
                <div class="face2">
                    <p>HTML</p>
                </div>
            </div>
            <div class="face1">
                <div id="contCss">
                    <img id="css" src="../assets/img/css.jpg" alt="CSS">
                </div>
                <div class="face2">
                    <p>CSS 3</p>
                </div>
            </div>
            <div class="face1">
                <div id="contJs">
                    <img id="js" src="../assets/img/js.jpeg" alt="JavaScript">
                </div>
                <div class="face2">
                    <p>JavaScript</p>
                </div>
            </div>
            <div class="face1">
                <div id="contBoots">
                    <img id="bootstrap" src="../assets/img/bootstrap.png"
                        alt="Bootstrap">
                </div>
                <div class="face2">
                    <p>Bootstrap 5.3</p>
                </div>
            </div>
            <div class="face1">
                <div id="contVue">
                    <img id="vue" src="../assets/img/vue.png" alt="Vue">
                </div>
                <div class="face2">
                    <p>Vue CLI</p>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center flex-wrap">
            <div class="face1">
                <div id="contPlSql">
                    <img id="plSql" src="../assets/img/oracle_pl-sql.jpg" alt="PL-SQL">
                </div>
                <div class="face2">
                    <p>PL/SQL</p>
                </div>
            </div>
            <div class="face1">
                <div id="contSql">
                    <img id="sql" src="../assets/img/sql.jpg" alt="">
                </div>
                <div class="face2">
                    <p>SQL</p>
                </div>
            </div>
            <div class="face1">
                <div id="contApex">
                    <img id="apex" src="../assets/img/Apex.jpg" alt="">
                </div>
                <div class="face2">
                    <p>Oracle APEX</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
img {
    height: 7rem;
    /* padding: 2rem; */
    margin: 1.5rem;
    border-radius: 25%;
}

.face2 {
    position: absolute;
    width: 7rem;
    height: 5rem;
    background: whitesmoke;
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 20px, 0px, ;
    box-sizing: border-box;
    border-radius: 30%;
    margin-left: 1.5rem;
    box-shadow: 0 20px 50px rgba(0, 0, 0, .8);
    transform: translateY(-105px);
    transition: .4s;
    z-index: 1;
}

.face2 p {
    color: black;
    margin-bottom: 0.5rem;
}

#contHtml {
    position: relative;
    overflow: hidden;
    height: 7rem;
    width: 7rem;
    margin: 1.5rem;
    border-radius: 25%;
}

#html {
    width: 140%;
    height: 140%;
    margin: 0rem;
    position: relative;
    bottom: 20%;
    right: 20%;
    z-index: 2;
}

#contCss{
    position: relative;
    overflow: hidden;
    height: 7rem;
    width: 7rem;
    margin: 1.5rem;
    border-radius: 25%;
}

#css{
    position: relative;
    z-index: 2;
    margin: 0px;
}

#contJs{
    position: relative;
    height: 7rem;
    width: 7rem;
    margin: 1.5rem;
    border-radius: 25%;
}

#js{
    position: relative;
    z-index: 2;
    margin: 0px;
}

#contBoots {
    position: relative;
    overflow: hidden;
    height: 7rem;
    width: 7rem;
    margin: 1.5rem;
    border-radius: 25%;
}

#bootstrap {
    /* width: 110%; */
    height: 120%;
    margin: 0rem;
    position: relative;
    bottom: 10%;
    right: 62%;
    z-index: 2;
}

#contVue{
    position: relative;
    overflow: hidden;
    height: 7rem;
    width: 7rem;
    margin: 1.5rem;
    border-radius: 25%;
}

#vue {
    position: relative;
    margin: 0rem;
    background-image: radial-gradient(rgb(11, 164, 80), black);
    z-index: 2;
}

#contPlSql {
    position: relative;
    overflow: hidden;
    height: 7rem;
    width: 7rem;
    margin: 1.5rem;
    border-radius: 25%;
}

#plSql {
    height: 120%;
    margin: 0rem;
    position: relative;
    bottom: 10%;
    right: 12%;
    z-index: 2;
}

#contSql {
    position: relative;
    overflow: hidden;
    height: 7rem;
    width: 7rem;
    margin: 1.5rem;
    border-radius: 25%;
}

#sql {
    margin: 0rem;
    position: relative;
    bottom: 0%;
    right: 14%;
    z-index: 2;
}

#contApex{
    position: relative;
    overflow: hidden;
    height: 7rem;
    width: 7rem;
    margin: 1.5rem;
    border-radius: 25%;
}

#apex{
    margin: 0rem;
    position: relative;
    z-index: 2;
}

#contHtml:hover {
    box-shadow:
        -10px 10px 105px rgb(255, 115, 0),
        10px 0 50px #16171d;
}

.face1:hover .face2 {
    transform: translateY(-75px);
}

#contCss:hover {
    box-shadow:
        -10px 10px 105px rgb(0, 225, 255),
        10px 0 50px #16171d;
}

#contJs:hover {
    box-shadow:
        -10px 10px 105px rgb(218, 200, 38),
        10px 0 50px #16171d;
}

#contBoots:hover {
    box-shadow:
        -10px 10px 105px rgb(166, 0, 255),
        10px 0 50px #16171d;
}

#contVue:hover {
    box-shadow:
        inset 0 0 50px #16171d,
        inset 0 0 100px rgb(11, 164, 80),
        inset 0 -10px 0 rgb(11, 164, 80),
        inset 20px 0 200px rgb(11, 164, 80),
        -10px 10px 105px rgb(11, 164, 80),
        10px 0 50px #16171d;
}

#contPlSql:hover {
    box-shadow:
        -10px 10px 105px rgb(255, 0, 30),
        10px 0 50px #f6f6f6;
}

#contSql:hover {
    box-shadow:
        -10px 10px 105px rgb(42, 30, 180),
        10px 0 50px #16171d;
}

#contApex:hover {
    box-shadow:
        -10px 10px 105px rgb(255, 68, 0),
        10px 0 50px #16171d;
}
</style>