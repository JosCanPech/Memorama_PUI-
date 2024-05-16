let score = 0;
let pair = [];
let cards = [];
let coords = [];
let cards_backup = [];
const imgs = [
  "../img/img_0.png", "../img/img_1.png",
  "../img/img_2.png", "../img/img_3.png",
  "../img/img_4.png", "../img/img_5.png",
  "../img/img_6.png", "../img/img_7.png",
  "../img/img_8.png", "../img/img_9.png",
  "../img/img_10.png", "../img/img_11.png"
];
const default_img = "../img/estrella.jpg"


function Tab6P() {
  
  let tablero = document.getElementById("tablero")
  let tarjetas = []
  tarjetas.push(`
  <tr>
  <td><button id="btn_0"></button></td>
  <td><button id="btn_1"></button></td>
  <td><button id="btn_2"></button></td>
  <td><button id="btn_3"></button></td>
</tr>
<tr>
  <td><button id="btn_4"></button></td>
  <td><button id="btn_5"></button></td>
  <td><button id="btn_6"></button></td>
  <td><button id="btn_7"></button></td>            
</tr>
<tr>
  <td><button id="btn_8"></button></td>
  <td><button id="btn_9"></button></td>
  <td><button id="btn_10"></button></td>
  <td><button id="btn_11"></button></td>
</tr>
      `)
  tablero.innerHTML = tarjetas.join("")
}


//generartablero6P()


function Tab8P() {
  let tablero = document.getElementById("tablero")
  let tarjetas = []
  tarjetas.push(`
  <tr>
  <td><button id="btn_0"></button></td>
  <td><button id="btn_1"></button></td>
  <td><button id="btn_2"></button></td>
  <td><button id="btn_3"></button></td>
</tr>
<tr>
  <td><button id="btn_4"></button></td>
  <td><button id="btn_5"></button></td>
  <td><button id="btn_6"></button></td>
  <td><button id="btn_7"></button></td>            
</tr>
<tr>
  <td><button id="btn_8"></button></td>
  <td><button id="btn_9"></button></td>
  <td><button id="btn_10"></button></td>
  <td><button id="btn_11"></button></td>
</tr>
<tr>
  <td><button id="btn_12"></button></td>
  <td><button id="btn_13"></button></td>
  <td><button id="btn_14"></button></td>
  <td><button id="btn_15"></button></td>
</tr>
      `)
  tablero.innerHTML = tarjetas.join("")
}


function Tab10P() {
  let tablero = document.getElementById("tablero")
  let tarjetas = []
  tarjetas.push(`
  <tr>
  <td><button id="btn_0"></button></td>
  <td><button id="btn_1"></button></td>
  <td><button id="btn_2"></button></td>
  <td><button id="btn_3"></button></td>
</tr>
<tr>
  <td><button id="btn_4"></button></td>
  <td><button id="btn_5"></button></td>
  <td><button id="btn_6"></button></td>
  <td><button id="btn_7"></button></td>            
</tr>
<tr>
  <td><button id="btn_8"></button></td>
  <td><button id="btn_9"></button></td>
  <td><button id="btn_10"></button></td>
  <td><button id="btn_11"></button></td>
</tr>
<tr>
  <td><button id="btn_12"></button></td>
  <td><button id="btn_13"></button></td>
  <td><button id="btn_14"></button></td>
  <td><button id="btn_15"></button></td>
</tr>
<tr>
  <td><button id="btn_16"></button></td>
  <td><button id="btn_17"></button></td>
  <td><button id="btn_18"></button></td>
  <td><button id="btn_19"></button></td>
</tr>
      `)
  tablero.innerHTML = tarjetas.join("")
}

function Tab12P() {
  let tablero = document.getElementById("tablero")
  let tarjetas = []
  tarjetas.push(`
  <tr>
  <td><button id="btn_0"></button></td>
  <td><button id="btn_1"></button></td>
  <td><button id="btn_2"></button></td>
  <td><button id="btn_3"></button></td>
</tr>
<tr>
  <td><button id="btn_4"></button></td>
  <td><button id="btn_5"></button></td>
  <td><button id="btn_6"></button></td>
  <td><button id="btn_7"></button></td>            
</tr>
<tr>
  <td><button id="btn_8"></button></td>
  <td><button id="btn_9"></button></td>
  <td><button id="btn_10"></button></td>
  <td><button id="btn_11"></button></td>
</tr>
<tr>
  <td><button id="btn_12"></button></td>
  <td><button id="btn_13"></button></td>
  <td><button id="btn_14"></button></td>
  <td><button id="btn_15"></button></td>
</tr>
<tr>
  <td><button id="btn_16"></button></td>
  <td><button id="btn_17"></button></td>
  <td><button id="btn_18"></button></td>
  <td><button id="btn_19"></button></td>
</tr>
<tr>
  <td><button id="btn_20"></button></td>
  <td><button id="btn_21"></button></td>
  <td><button id="btn_22"></button></td>
  <td><button id="btn_23"></button></td>
</tr>

      `)
  tablero.innerHTML = tarjetas.join("")
}

Tab8P()

function generartablero() {
  Tab6P()
  init()
}

// tinene que recibir los pares * 2
function init(){
  document.getElementById("puntuacion").innerText = "0/6 Gemas encontradas";
  let temp = [];
  for(let i = 0; i < 12; i++){
    console.log("carta "+i);
    let random = Math.floor(Math.random() * 12);
    console.log(random);
    let j = 0;
    for(let k = 0; j <= i; j++){
      if(random == temp[j]){
        j = k;
        break;
      }
    }
    if(j > i){
      temp[i] = random;
      console.log(temp);
    }else{ i--; }
  }
  for(let i = 0; i < 6; i++){
    coords[i] = [];
    coords[i][0] = temp[0 + (i * 2)];
    coords[i][1] = temp[1 + (i * 2)];
    console.log(coords);
  }
  console.log(coords);
  for(let i = 0; i < 12; i++){
    let btn = "btn_" + i;
    cards[i] = document.getElementById(btn);
    cards_backup[i] = document.getElementById(btn);
    cards[i].addEventListener("click", turn_card);
  }
  setTimeout(set_default_img, 2000);
  for(let i = 0 ; i < 6; i++){// numero de pares
    cards[coords[i][0]].style.backgroundImage = "url("+imgs[i]+")";
    cards[coords[i][1]].style.backgroundImage = "url("+imgs[i]+")";
  }
  this.removeEventListener("click", init);
  console.log(cards);
}

function set_default_img(){
  for(let i = 0; i < 12; i++){
    cards[i].style.backgroundImage = "url("+default_img+")";
  }
}

function turn_card(){
  let id = this.id;
  let btn = document.getElementById(id);
  let coord = 0;
  let img = 0;
  for(let i = 0; i < 12; i++){
    if(cards_backup[i] == btn){
      console.log(cards_backup)
      coord = i;
    }
  }
  for(let i = 0; i < coords.length; i++){
    if(coord == coords[i][0] || coord == coords[i][1]){
      img = i;
    }
  }
  btn.style.backgroundImage = "url("+imgs[img]+")";
  btn.removeEventListener("click", turn_card);
  console.log(btn);
  prepare_cards(btn);
}

function prepare_cards(btn){
  if(pair[0] != null){
    pair[1] = btn;
    //btn.style.backgroundImage = "url(../img/black_silence.jpeg)";
    for(let i = 0; i < cards.length; i++){
      cards[i].removeEventListener("click", turn_card);
    }
    setTimeout(check_pair, 2000); 
  }else{ pair[0] = btn; }
  console.log(pair);
}

function check_pair(){ 
  let card_img_1 = window.getComputedStyle(pair[0]).backgroundImage.slice(5, -2);
  console.log(card_img_1);
  let card_img_2 = window.getComputedStyle(pair[1]).backgroundImage.slice(5, -2);
  console.log(card_img_2);
  if(card_img_1 == card_img_2){
    // keep 'em how they are and reset
    document.getElementById("puntuacion").innerText = ++score + "/6 Gemas encontradas";
    for(let i = 0; i < cards.length; i++){
      console.log(i);
      if(cards[i] == pair[0] || cards[i] == pair[1]){
        console.log(cards[i]);
        cards.splice(i, 1);
        --i;
      }
    }
    console.log(cards);
    pair = [];
    console.log("Armaste un par :3");
  }else{
    // turn 'em around and reset
    pair[0].style.backgroundImage = "url("+default_img+")";
    pair[1].style.backgroundImage = "url("+default_img+")";
    pair = []
    console.log("No es un par :c");
  }
  for(let i = 0; i < cards.length; i++){
    console.log(i);
    cards[i].addEventListener("click", turn_card);
  }
}



function generartablero2() {
  Tab8P()
  init2()
}

// tinene que recibir los pares * 2
function init2(){
  document.getElementById("puntuacion").innerText = "0/8 Gemas encontradas";
  let temp = [];
  for(let i = 0; i < 16; i++){
    console.log("carta "+i);
    let random = Math.floor(Math.random() * 16);
    console.log(random);
    let j = 0;
    for(let k = 0; j <= i; j++){
      if(random == temp[j]){
        j = k;
        break;
      }
    }
    if(j > i){
      temp[i] = random;
      console.log(temp);
    }else{ i--; }
  }
  for(let i = 0; i < 8; i++){
    coords[i] = [];
    coords[i][0] = temp[0 + (i * 2)];
    coords[i][1] = temp[1 + (i * 2)];
    console.log(coords);
  }
  console.log(coords);
  for(let i = 0; i < 16; i++){
    let btn = "btn_" + i;
    cards[i] = document.getElementById(btn);
    cards_backup[i] = document.getElementById(btn);
    cards[i].addEventListener("click", turn_card);
  }
  setTimeout(set_default_img, 2000);
  for(let i = 0 ; i < 8; i++){// numero de pares
    cards[coords[i][0]].style.backgroundImage = "url("+imgs[i]+")";
    cards[coords[i][1]].style.backgroundImage = "url("+imgs[i]+")";
  }
  this.removeEventListener("click", init);
  console.log(cards);
}

function set_default_img(){
  for(let i = 0; i < 16; i++){
    cards[i].style.backgroundImage = "url("+default_img+")";
  }
}

function turn_card(){
  let id = this.id;
  let btn = document.getElementById(id);
  let coord = 0;
  let img = 0;
  for(let i = 0; i < 16; i++){
    if(cards_backup[i] == btn){
      console.log(cards_backup)
      coord = i;
    }
  }
  for(let i = 0; i < coords.length; i++){
    if(coord == coords[i][0] || coord == coords[i][1]){
      img = i;
    }
  }
  btn.style.backgroundImage = "url("+imgs[img]+")";
  btn.removeEventListener("click", turn_card);
  console.log(btn);
  prepare_cards(btn);
}

function prepare_cards(btn){
  if(pair[0] != null){
    pair[1] = btn;
    //btn.style.backgroundImage = "url(../img/black_silence.jpeg)";
    for(let i = 0; i < cards.length; i++){
      cards[i].removeEventListener("click", turn_card);
    }
    setTimeout(check_pair, 2250); 
  }else{ pair[0] = btn; }
  console.log(pair);
}

function check_pair(){ 
  let card_img_1 = window.getComputedStyle(pair[0]).backgroundImage.slice(5, -2);
  console.log(card_img_1);
  let card_img_2 = window.getComputedStyle(pair[1]).backgroundImage.slice(5, -2);
  console.log(card_img_2);
  if(card_img_1 == card_img_2){
    // keep 'em how they are and reset
    document.getElementById("puntuacion").innerText = ++score + "/8 Gemas encontradas"; 
    for(let i = 0; i < cards.length; i++){
      console.log(i);
      if(cards[i] == pair[0] || cards[i] == pair[1]){
        console.log(cards[i]);
        cards.splice(i, 1);
        --i;
      }
    }
    console.log(cards);
    pair = [];
    console.log("Armaste un par :3");
  }else{
    // turn 'em around and reset
    pair[0].style.backgroundImage = "url("+default_img+")";
    pair[1].style.backgroundImage = "url("+default_img+")";
    pair = []
    console.log("No es un par :c");
  }
  for(let i = 0; i < cards.length; i++){
    console.log(i);
    cards[i].addEventListener("click", turn_card);
  }
}


function generartablero3() {
  Tab10P()
  init3()
}

// tinene que recibir los pares * 2
function init3(){
  document.getElementById("puntuacion").innerText = "0/10 Gemas encontradas";
  let temp = [];
  for(let i = 0; i < 20; i++){
    console.log("carta "+i);
    let random = Math.floor(Math.random() * 20);
    console.log(random);
    let j = 0;
    for(let k = 0; j <= i; j++){
      if(random == temp[j]){
        j = k;
        break;
      }
    }
    if(j > i){
      temp[i] = random;
      console.log(temp);
    }else{ i--; }
  }
  for(let i = 0; i < 10; i++){
    coords[i] = [];
    coords[i][0] = temp[0 + (i * 2)];
    coords[i][1] = temp[1 + (i * 2)];
    console.log(coords);
  }
  console.log(coords);
  for(let i = 0; i < 20; i++){
    let btn = "btn_" + i;
    cards[i] = document.getElementById(btn);
    cards_backup[i] = document.getElementById(btn);
    cards[i].addEventListener("click", turn_card);
  }
  setTimeout(set_default_img, 2000);
  for(let i = 0 ; i < 10; i++){// numero de pares
    cards[coords[i][0]].style.backgroundImage = "url("+imgs[i]+")";
    cards[coords[i][1]].style.backgroundImage = "url("+imgs[i]+")";
  }
  this.removeEventListener("click", init);
  console.log(cards);
}

function set_default_img(){
  for(let i = 0; i < 20; i++){
    cards[i].style.backgroundImage = "url("+default_img+")";
  }
}

function turn_card(){
  let id = this.id;
  let btn = document.getElementById(id);
  let coord = 0;
  let img = 0;
  for(let i = 0; i < 20; i++){
    if(cards_backup[i] == btn){
      console.log(cards_backup)
      coord = i;
    }
  }
  for(let i = 0; i < coords.length; i++){
    if(coord == coords[i][0] || coord == coords[i][1]){
      img = i;
    }
  }
  btn.style.backgroundImage = "url("+imgs[img]+")";
  btn.removeEventListener("click", turn_card);
  console.log(btn);
  prepare_cards(btn);
}

function prepare_cards(btn){
  if(pair[0] != null){
    pair[1] = btn;
    //btn.style.backgroundImage = "url(../img/black_silence.jpeg)";
    for(let i = 0; i < cards.length; i++){
      cards[i].removeEventListener("click", turn_card);
    }
    setTimeout(check_pair, 2500); 
  }else{ pair[0] = btn; }
  console.log(pair);
}

function check_pair(){ 
  let card_img_1 = window.getComputedStyle(pair[0]).backgroundImage.slice(5, -2);
  console.log(card_img_1);
  let card_img_2 = window.getComputedStyle(pair[1]).backgroundImage.slice(5, -2);
  console.log(card_img_2);
  if(card_img_1 == card_img_2){
    // keep 'em how they are and reset
    document.getElementById("puntuacion").innerText = ++score + "/10 Gemas encontradas";
    for(let i = 0; i < cards.length; i++){
      console.log(i);
      if(cards[i] == pair[0] || cards[i] == pair[1]){
        console.log(cards[i]);
        cards.splice(i, 1);
        --i;
      }
    }
    console.log(cards);
    pair = [];
    console.log("Armaste un par :3");
  }else{
    // turn 'em around and reset
    pair[0].style.backgroundImage = "url("+default_img+")";
    pair[1].style.backgroundImage = "url("+default_img+")";
    pair = []
    console.log("No es un par :c");
  }
  for(let i = 0; i < cards.length; i++){
    console.log(i);
    cards[i].addEventListener("click", turn_card);
  }
}

function generartablero4() {
  Tab12P()
  init4()
}

// tinene que recibir los pares * 2
function init4(){
  document.getElementById("puntuacion").innerText = "0/12 Gemas encontradas";
  let temp = [];
  for(let i = 0; i < 24; i++){
    console.log("carta "+i);
    let random = Math.floor(Math.random() * 24);
    console.log(random);
    let j = 0;
    for(let k = 0; j <= i; j++){
      if(random == temp[j]){
        j = k;
        break;
      }
    }
    if(j > i){
      temp[i] = random;
      console.log(temp);
    }else{ i--; }
  }
  for(let i = 0; i < 12; i++){
    coords[i] = [];
    coords[i][0] = temp[0 + (i * 2)];
    coords[i][1] = temp[1 + (i * 2)];
    console.log(coords);
  }
  console.log(coords);
  for(let i = 0; i < 24; i++){
    let btn = "btn_" + i;
    cards[i] = document.getElementById(btn);
    cards_backup[i] = document.getElementById(btn);
    cards[i].addEventListener("click", turn_card);
  }
  setTimeout(set_default_img, 2000);
  for(let i = 0 ; i < 12; i++){// numero de pares
    cards[coords[i][0]].style.backgroundImage = "url("+imgs[i]+")";
    cards[coords[i][1]].style.backgroundImage = "url("+imgs[i]+")";
  }
  this.removeEventListener("click", init);
  console.log(cards);
}

function set_default_img(){
  for(let i = 0; i < 24; i++){
    cards[i].style.backgroundImage = "url("+default_img+")";
  }
}

function turn_card(){
  let id = this.id;
  let btn = document.getElementById(id);
  let coord = 0;
  let img = 0;
  for(let i = 0; i < 24; i++){
    if(cards_backup[i] == btn){
      console.log(cards_backup)
      coord = i;
    }
  }
  for(let i = 0; i < coords.length; i++){
    if(coord == coords[i][0] || coord == coords[i][1]){
      img = i;
    }
  }
  btn.style.backgroundImage = "url("+imgs[img]+")";
  btn.removeEventListener("click", turn_card);
  console.log(btn);
  prepare_cards(btn);
}

function prepare_cards(btn){
  if(pair[0] != null){
    pair[1] = btn;
    //btn.style.backgroundImage = "url(../img/black_silence.jpeg)";
    for(let i = 0; i < cards.length; i++){
      cards[i].removeEventListener("click", turn_card);
    }
    setTimeout(check_pair, 2750); 
  }else{ pair[0] = btn; }
  console.log(pair);
}

function check_pair(){ 
  let card_img_1 = window.getComputedStyle(pair[0]).backgroundImage.slice(5, -2);
  console.log(card_img_1);
  let card_img_2 = window.getComputedStyle(pair[1]).backgroundImage.slice(5, -2);
  console.log(card_img_2);
  if(card_img_1 == card_img_2){
    // keep 'em how they are and reset
    document.getElementById("puntuacion").innerText = ++score + "/12 Gemas encontradas"; //pendiente al agregar mas pares
    for(let i = 0; i < cards.length; i++){
      console.log(i);
      if(cards[i] == pair[0] || cards[i] == pair[1]){
        console.log(cards[i]);
        cards.splice(i, 1);
        --i;
      }
    }
    console.log(cards);
    pair = [];
    console.log("Armaste un par :3");
  }else{
    // turn 'em around and reset
    pair[0].style.backgroundImage = "url("+default_img+")";
    pair[1].style.backgroundImage = "url("+default_img+")";
    pair = []
    console.log("No es un par :c");
  }
  for(let i = 0; i < cards.length; i++){
    console.log(i);
    cards[i].addEventListener("click", turn_card);
  }
}
