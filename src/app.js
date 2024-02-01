// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
// Datos para las cartas
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

function generateRandomCard() {
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  return {
    suit: randomSuit,
    rank: randomRank
  };
}

function getCardImageSrc(card) {
  let cardFileName =
    card.rank.toLowerCase() + "_of_" + card.suit.toLowerCase() + ".png";
  return "src/images/" + cardFileName;
}

function generateCardHTML(card) {
  let cardImage = document.getElementById("cardImage");
  cardImage.src = getCardImageSrc(card);
  cardImage.alt = `${card.rank} of ${card.suit}`;
}

function generateCard() {
  let randomCard = generateRandomCard();
  generateCardHTML(randomCard);
}

// Llamar a generateCard al cargar la página para mostrar una carta inicial
generateCard();
