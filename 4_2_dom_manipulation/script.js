const section = document.getElementById("container");
const section2 = document.querySelector("#container");
const allLi = document.querySelectorAll(".second");
const thirdOL = document.querySelector("ol>li.third");

section.innerText = "Hello!";

const divFooter = document.querySelector(".footer");
divFooter.classList.add("main");
divFooter.classList.remove("main");

const newLi = document.createElement("li");
newLi.innerText = "four";
const ul = document.querySelector("ul");
ul.append(newLi);

const olLi = document.querySelectorAll("ol>li");
for (let li of olLi) {
  li.style.backgroundColor = "green";
}

document.querySelector(".footer").remove();
