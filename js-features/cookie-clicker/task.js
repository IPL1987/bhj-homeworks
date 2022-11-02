'use strict'

const cookieImage = document.getElementById("cookie");
let click = document.getElementById("clicker__counter");
let clickSpeed = document.getElementById("click__speed");
let nowTime = Date.now();
let previousClick = 0;

cookieImage.onclick = function () {
  let currentClick =  click.textContent++;

  cookieImage.width = 250; // как уменьшить картинку после клика?

  clickSpeed.textContent = (((Date.now() - nowTime) / 1000) / (currentClick - previousClick)).toFixed(2);
};