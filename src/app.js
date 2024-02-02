// /* eslint-disable */
// import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
// Datos para las cartas

let intervalId;
let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
let ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace"
];
// generador aleatorio de cartas
function generateRandomCard() {
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  // cree un objeto y retorne 2 propiedades de el para manipular mejor
  return {
    suit: randomSuit,
    rank: randomRank
  };
}
// PAra obtener la imagen desde la carpeta en donde almacene

function getCardImageSrc(card) {
  let cardName =
    card.rank.toLowerCase() + "_of_" + card.suit.toLowerCase() + ".png";
  return "src/images/" + cardName;
}

function generateCardHTML(card) {
  let cardImage = document.getElementById("cardImage");
  cardImage.src = getCardImageSrc(card);
  cardImage.alt = `${card.rank} of ${card.suit}`;
}

function startInterval() {
  let intervalValue = parseInt(document.getElementById("intervalInput").value);
  // Limpiar el intervalo actual antes de comenzar uno nuevo
  clearInterval(intervalId);
  // Configurar un nuevo intervalo
  intervalId = setInterval(generateCard, intervalValue * 1000);
}
startInterval();

// Declaro un funcion general
function generateCard() {
  let randomCard = generateRandomCard();
  generateCardHTML(randomCard);
}

document.getElementById("btn").addEventListener("click", generateCard);
// Llamar a generateCard al cargar la página para mostrar una carta inicial
generateCard();
