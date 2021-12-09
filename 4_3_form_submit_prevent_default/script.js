const buttonElement = document.querySelector("button");
const formElement = document.querySelector("#logoform");

const brandInput = document.querySelector("input[name=brandName]");
const brandColor = document.querySelector("input[name=brandColor]");
const fontSize = document.querySelector("input[name=fontSize]");
const fontSizeLabel = document.querySelector("#fontSizeLabel");
const results = document.querySelector("#results");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(brandInput.value, brandColor.value, fontSize.value);

  const newDiv = document.createElement("h2");
  newDiv.innerText = brandInput.value;
  newDiv.style.color = brandColor.value;
  newDiv.style.fontSize = `${fontSize.value}px`;
  results.append(newDiv);
});

fontSize.addEventListener("input", function (event) {
  fontSizeLabel.innerText = fontSize.value;
});
