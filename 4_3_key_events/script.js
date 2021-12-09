const allButtons = document.querySelectorAll("li button");
const form = document.querySelector("#add-friend");
const friendsList = document.querySelector("ul");
const friendInput = document.querySelector("#first-name");
const switchToggle = document.querySelector("#switch");

if (localStorage.getItem("darkModeEnabled")) {
  document.querySelector("body").classList.add("dark");
  switchToggle.checked = true;
}

switchToggle.addEventListener("input", function (event) {
  const { checked } = switchToggle;
  if (checked) {
    localStorage.setItem("darkModeEnabled", checked);
  } else {
    localStorage.removeItem("darkModeEnabled");
  }

  document.querySelector("body").classList.toggle("dark");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newLi = document.createElement("li");
  newLi.innerText = friendInput.value;

  const newButton = document.createElement("button");
  newButton.innerText = "Remove";
  newLi.append(newButton);
  friendsList.append(newLi);
  form.reset();
});

friendsList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  } else if (event.target.tagName === "LI") {
    event.target.classList.add("bestFriend");
    const heart = document.createElement("span");
    heart.innerHTML += "&#9829;";
    event.target.prepend(heart);
  }
});
