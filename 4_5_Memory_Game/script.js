const gameContainer = document.getElementById("game");
let cardOne;
let cardTwo;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");

    newDiv.classList.add("cardBack"); // add a default back class to all cards

    //I'm saving the color, flipped status, and matched status in data attributes
    newDiv.setAttribute("data-color", color);
    newDiv.setAttribute("data-flipped", "false");
    newDiv.setAttribute("data-matched", "false");

    newDiv.addEventListener("click", handleCardClick);

    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
  if (!isClickable(event)) return;
  if (countFlipped() === 0) {
    cardOne = event.target;
    flipCard(cardOne);
  } else if (countFlipped() === 1) {
    cardTwo = event.target;
    flipCard(cardTwo);

    setTimeout(function () {
      checkForMatch(cardOne, cardTwo);
    }, 1500);
  }
}

function resetUnmatched() {
  cardOne = 0;
  cardTwo = 0;
  const allDivs = document.querySelectorAll("div div");

  for (let div of allDivs) {
    if (
      div.getAttribute("data-matched") === "false" &&
      div.getAttribute("data-flipped") === "true"
    ) {
      div.setAttribute("data-flipped", "false");
      div.setAttribute("class", "cardBack");
    }
  }
}

function countFlipped() {
  const allDivs = document.querySelectorAll("div div");
  let visible = 0;

  for (let div of allDivs) {
    if (
      div.getAttribute("data-matched") === "false" &&
      div.getAttribute("data-flipped") === "true"
    ) {
      visible++;
    }
  }
  return visible;
}

function flipCard(card) {
  if (card.getAttribute("data-flipped") === "false") {
    card.setAttribute("data-flipped", "true");
    //my color classes are further towards the bottom of my CSS file than the cardBackground class, so they'll have a higher specificity and their background-color will take priority
    card.classList.toggle(card.getAttribute("data-color"));
  }
}

function checkForMatch(cardOne, cardTwo) {
  if (
    cardOne.getAttribute("data-color") === cardTwo.getAttribute("data-color")
  ) {
    cardOne.setAttribute("data-matched", "true");
    cardTwo.setAttribute("data-matched", "true");
    if (checkForWin()) alert("You win!");
  } else resetUnmatched();
}

function checkForWin() {
  const allDivs = document.querySelectorAll("div div");
  let matches = 0;

  for (let div of allDivs) {
    if (div.getAttribute("data-matched") === "true") {
      matches++;
    }
  }
  if (matches === shuffledColors.length) {
    return true;
  } else return false;
}

function isClickable(event) {
  if (
    event.target.getAttribute("data-matched") === "false" &&
    event.target.getAttribute("data-flipped") === "false"
  ) {
    return true;
  } else return false;
}

// when the DOM loads
createDivsForColors(shuffledColors);
