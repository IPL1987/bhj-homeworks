'use strict'

let timer = document.getElementById("timer");

function countdown() {

  // let d = new Date();
  // let n = d.toLocaleTimeString();
  // let newTime = n;
  // parseInt(newTime);  // не понимаю как выполнить #1
  

  let newTime = timer.textContent--;
  if (newTime === 0) {
    alert("Вы победили в конкурсе");
    //document.getElementById("img").click() // #2
    clearInterval(timerId);
  }
}
let timerId = setInterval(countdown, 1000);