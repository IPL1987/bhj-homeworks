const menuItem = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
let count = 0;

for (let menu of Array.from(menuItem)) {
  prev.onclick = function () {
    if (count == 0) {
      menuItem.item(count).classList.toggle('slider__item_active');
      count = menuItem.length - 1;
      menuItem.item(count).classList.toggle('slider__item_active');
    } else {
      menuItem.item(count).classList.toggle('slider__item_active');
      count--;
      menuItem.item(count).classList.toggle('slider__item_active');
    }
  }
  next.onclick = function () {
    if (count == sliderItem.length - 1) {
      menuItem.item(count).classList.toggle('slider__item_active');
      count = 0;
      menuItem.item(count).classList.toggle('slider__item_active');
    } else {
      menuItem.item(count).classList.toggle('slider__item_active');
      count++;
      menuItem.item(count).classList.toggle('slider__item_active');
    }
  }
}