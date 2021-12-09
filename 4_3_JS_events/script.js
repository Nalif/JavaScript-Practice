document.addEventListener("DOMContentLoaded", function () {
  function randomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  }

  const formElement = document.querySelector("form");
  const h1Element = document.querySelector("h1");
  const removeButtons = document.querySelectorAll("li button");
  const friendList = document.querySelector("ul");
  const newFriendInput = document.querySelector("#first-name");

  friendList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    }
  });

  function consoleLog() {
    console.log("typing");
  }

  formElement.addEventListener("keydown", consoleLog);

  h1Element.addEventListener("mouseenter", function (event) {
    h1Element.style.color = randomRgb();
  });

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    if (newFriendInput.value) {
      // check to see if there's a valid value
      const newLi = document.createElement("li");
      newLi.innerText = newFriendInput.value;

      const newButton = document.createElement("button");
      newButton.innerText = "Remove";

      newLi.append(newButton);
      friendList.append(newLi);

      formElement.reset();
    }
  });
});
