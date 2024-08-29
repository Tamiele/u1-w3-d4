const tabellone = document.getElementById("tabellone");
const creatButton = document.getElementById("button");

// Crea con il for 76 celle numerate
num = [];
for (let i = 1; i <= 90; i++) {
  const tombolini = document.createElement("div");
  tombolini.className = "tombolini"; //creo una classe per i tombolini che poi vado a modificare nel css
  tombolini.textContent = i; //assegno la i in modo da dare del testo (in qeuesto caso numeri) dei tombolini
  tabellone.appendChild(tombolini);
  num.push(i);
}

//creo un evento al click del bottone che mi genera numeri random
creatButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 90) + 1;

  const newTombolini = document.querySelectorAll(".tombolini"); //creo una nuova variabile con il valore di tombolini.
  newTombolini[randomNumber];
  const changeColorTombolini = newTombolini[randomNumber - 1];
  changeColorTombolini.style.backgroundColor = "gold";
});

// newTombolini.forEach((tombolini) => {
//   /*se e solo se il testo dei tombolini è uguale al numero random che si crea premendo il bottone*/
//   if (parseInt(tombolini.textContent) === randomNumber) {
//     tombolini.style.backgroundColor = "gold"; // allora Cambia il colore della tombolini in corrispondenza del numero estratto.
//   }
// });

///////EXTRA///creazione tabellina
const tabellina = document.getElementById("tabellina");
for (let i = 1; i <= 24; i++) {
  const cartella = document.createElement("div");
  cartella.className = "cartella";
  cartella.textContent = i;
  tabellina.appendChild(cartella);
}
