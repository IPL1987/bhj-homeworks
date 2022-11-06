'use strict'

const getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let win = deadMole.textContent;
let lost = lostMole.textContent;

function checkGame(deadMole, lostMole) {
  if (deadMole === 10) {
    alert('Кроты мертвы!');
    clear()
  } else if (lostMole === 5) {
    alert('Кроты захватили планету!');
    clear()
  };
};

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (this.className.includes('hole_has-mole')) {
      win = deadMole.textContent ++;
    } else {
      lost = lostMole.textContent ++;
    };
    checkGame(win, lost);
  };
};

function clear () {
  deadMole.textContent = 0; 
  lostMole.textContent = 0;
}