'use strict'

let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let win = parseInt(deadMole.textContent);
let lost = parseInt(lostMole.textContent);

function checkGame(deadMole, lostMole) {
  console.log(deadMole, lostMole);
  if (deadMole === 10) {
    alert("Кроты мертвы!");
    location.reload();
  } else if (lostMole === 5) {
    alert("Кроты захватили планету!");
    location.reload();
  };
};

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (this.className.includes('hole_has-mole')) {
      deadMole.textContent++;
    } else {
      lostMole.textContent++;
    };
    checkGame(win, lost);
  };
};