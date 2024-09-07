// Crea con il for 90 celle numerate
const tabellone = document.getElementById("tabellone");
let arrayTombolini = [];
let num = [];
function genTombolini() {
  for (let i = 0; i < 90; i++) {
    let variabile = i + 1;
    let tombolini = document.createElement("div");
    tombolini.className = "tombolini"; //creo una classe per i tombolini che poi vado a modificare nel css
    tombolini.innerText = variabile; //assegno la i in modo da dare del testo (in qeuesto caso numeri) dei tombolini
    tabellone.appendChild(tombolini);
    arrayTombolini.push(tombolini);
    num.push(variabile);
  }
}
console.log(arrayTombolini);

console.log(num);

let arrayTabellina = [];
let cartella = [];
console.log(cartella);
//creo un evento al click del bottone che mi genera numeri random
const creatButton = document.getElementById("button");
function eventButton() {
  creatButton.addEventListener("click", () => {
    if (num.length > 0) {
      let randomNumber = Math.floor(Math.random() * num.length);
      let numeroCasuale = num[randomNumber];

      arrayTombolini[numeroCasuale - 1].style.backgroundColor = "gold";
      num.splice(randomNumber, 1);
      console.log(numeroCasuale);

      for (let i = 0; i < cartella.length; i++) {
        if (parseInt(cartella[i].innerText) === numeroCasuale) {
          cartella[i].style.backgroundColor = "gold";
        }
      }
    }
  });
}

///////EXTRA///creazione tabellina

const tabellina = document.getElementById("tabellina");

function miniCartella() {
  for (let i = 0; i <= 24; i++) {
    let cartellaRandom = Math.floor(Math.random() * 90) + 1;

    while (arrayTabellina.includes(cartellaRandom)) {
      cartellaRandom = Math.floor(Math.random() * 90) + 1;
    }

    let arrayMinicartella = document.createElement("div");
    arrayMinicartella.className = "cartella";

    arrayMinicartella.innerText = cartellaRandom;
    tabellina.appendChild(arrayMinicartella);
    cartella.push(arrayMinicartella);
    arrayTabellina.push(cartellaRandom);
  }
}

window.onload = () => {
  genTombolini();
  eventButton();
  miniCartella();
};
