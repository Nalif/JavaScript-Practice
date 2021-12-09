function coundown(num) {
  timer = setInterval(function () {
    if (num) {
      console.log(num);
      num--;
    } else {
      clearInterval(timer);
      console.log("Done!");
    }
  }, 1000);
}

function randomGame() {
  let timesGenerated = 0;

  timer = setInterval(function () {
    let randomNum = Math.random();
    console.log(randomNum);
    timesGenerated++;
    if (randomNum > 0.75) {
      clearInterval(timer);
      console.log(`It took ${timesGenerated} tries!`);
    }
  }, 1000);
}
