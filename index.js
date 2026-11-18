/* 1. Az új játék gombra kattintva legyen új játékterünk */

/* Ha a játékos a kő/papír/olló gombokra kattint, akkor a megfelelő kép jelenjen meg */

const ujJatekGomb=document.getElementById("ujjatek");
const jatekTer=document.getElementsByClassName("jatekter");

ujJatekGomb.addEventListener("click", megjelenit);

function megjelenit(){
    const htmlKod=`
    <div id="gep">
        <h2>A gép tippje</h2>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      <div id="jatekos">
        <h2>A Játékos tippje</h2>
        <div class="gombok">
          <button id="ko">K</button>
          <button id="papir">P</button>
          <button id="ollo">O</button>
        </div>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      `
    jatekTer[0].innerHTML=""
    jatekTer[0].insertAdjacentHTML("beforeend", htmlKod)
    const gombElemek=document.querySelectorAll(".gombok button") /* listát kapunk */
    gombElemek[0].addEventListener("click", kivalaszt)
    gombElemek[1].addEventListener("click", kivalaszt)
    gombElemek[2].addEventListener("click", kivalaszt)
    
}

function kivalaszt(event){
  const kep=document.querySelector("#jatekos img")
  kep.src=`kepek/${event.target.id}.png`
  gepvalasztasa(event.target.id)
}

const TIPPLISTA = ["ko", "papir", "ollo"]
function gepvalasztasa(jValasztasa) {
  //megkell fogni a gép képét
  //generálunk egy véletlen számot - majd véletlen számnak megfelelően kiválasztunk vlmit

  const kep = document.querySelector("#gep img")
  let veletlen = Math.floor(Math.random()*3)
  let gepTipp = 
  console.log(jValasztasa)
  ellenorzes(veletlen,jValasztasa)
}

function ellenorzes(veletlen, jValasztasa) {
  //Össze kell hasoníltani a gép és a játékos választását
  //A gép választása véletlen
  let gep = "ollo"
  let szoveg = "A gép nyert"
  const kiiras = document.getElementById("gyoztes")
  if (veletlen == 0) gep = "ko"
  if (veletlen == 2) gep = "papir"
  if (jValasztasa == gep) szoveg = "Döntetlen"
  if (jValasztasa == "ko" && gep == "ollo") szoveg = "Játékos nyert"
  if (jValasztasa == "papir" && gep == "ko") szoveg = "Játékos nyert"
  if (jValasztasa == "ollo" && gep == "papir") szoveg = "Játékos nyert"
  kiiras.innerHTML=szoveg
}