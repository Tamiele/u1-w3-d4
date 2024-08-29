// Crea con il for 76 celle numerate
const tabellone = document.getElementById("tabellone");
num = [];
function genTombolini() {
  for (let i = 1; i <= 90; i++) {
    const tombolini = document.createElement("div");
    tombolini.className = "tombolini"; //creo una classe per i tombolini che poi vado a modificare nel css
    tombolini.textContent = i; //assegno la i in modo da dare del testo (in qeuesto caso numeri) dei tombolini
    tabellone.appendChild(tombolini);
    num.push(i);
  }
}

//creo un evento al click del bottone che mi genera numeri random
const creatButton = document.getElementById("button");
function eventButton() {
  creatButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 90) + 1;

    const newTombolini = document.querySelectorAll(".tombolini"); //creo una nuova variabile con il valore di tombolini.
    newTombolini[randomNumber]; //aggancio la nuova variabile alla nodelist di randomNumber in modo da far illuminare le caselle
    const changeColorTombolini = newTombolini[randomNumber - 1]; // il -1 e per far uscire l'index uguale ai numeri generati.
    changeColorTombolini.style.backgroundColor = "gold";
  });
}

///////EXTRA///creazione tabellina
const tabellina = document.getElementById("tabellina");
function miniCartella() {
  for (let i = 1; i <= 24; i++) {
    const cartellaRandom = Math.floor(Math.random() * 90) + 1;
    const cartella = document.createElement("div");
    cartella.className = "cartella";

    cartella.textContent = cartellaRandom;

    console.log(cartellaRandom);

    tabellina.appendChild(cartella);
    if (cartellaRandom) {
      cartellaRandom !== cartellaRandom;
    }
  }
}

window.onload = () => {
  genTombolini();
  eventButton();
  miniCartella();
};
