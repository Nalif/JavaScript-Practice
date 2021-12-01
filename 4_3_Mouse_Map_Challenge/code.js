const bodyElement = document.querySelector("body");

window.addEventListener("mousemove", function (event) {
  x = event.clientX;
  y = event.clientY;
  bodyElement.style.backgroundColor = mouseToRgb(x, y);
  console.log(mouseToRgb(x, y));
});

function mouseToRgb(x, y) {
  return `rgb(${Math.round((x * 255) / window.innerWidth)},0,${Math.round(
    (y * 255) / window.innerHeight
  )})`;
}
