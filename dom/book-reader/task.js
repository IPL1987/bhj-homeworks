'use strict'

debugger
const book = document.querySelector('.book');
const buttons = document.querySelector('.book__control');
const color = document.querySelector('.book__control_color')
const bckg = document.querySelector('.book__control_background')

for (let control of buttons.children) {
  control.addEventListener('click', changeSize)
}
for (let control of color.children) {
  control.addEventListener('click', changeColor)
}
for (let control of bckg.children) {
  control.addEventListener('click', changeBckg)
}

function changeSize(event) {
  if (this.dataset.size === 'big') {
    book.classList.add('book_fs-big');
    book.classList.remove('book_fs-small');
  } else if (this.dataset.size === 'small') {
    book.classList.add('book_fs-small');
    book.classList.remove('book_fs-big');
  } else {
    book.classList.remove('book_fs-small', 'book_fs-big');
  }
  event.preventDefault();

  for (let fonts of document.querySelectorAll('.font-size')) {
    fonts.classList.remove('font-size_active');
  }
  this.classList.add('font-size_active');
}

function changeColor(event) {
  event.preventDefault();

  if (this.dataset.textColor === 'gray') {
    book.classList.add('book_color-gray');
    book.classList.remove('book_color-whitesmoke');
  } else if (this.dataset.textColor === 'whitesmoke') {
    book.classList.add('book_color-whitesmoke');
    book.classList.remove('book_color-gray');
  } else {
    book.classList.remove('book_color-gray', 'book_color-whitesmoke');
  }
  
  for (let colors of document.querySelectorAll('.color')) {
    colors.classList.remove('color_active');
  }

  this.classList.add('color_active');
}

function changeBckg(event) {
  event.preventDefault();

  if (this.dataset.bgColor === 'gray') {
    book.classList.add('bg_color_gray');
    book.classList.remove('bg_color_white');
  } else if (this.dataset.bgColor === 'white') {
    book.classList.add('bg_color_white');
    book.classList.remove('bg_color_gray');
  } else {
    book.classList.remove('bg_color_gray', 'bg_color_white');
  }
  
  for (let bgCol of document.querySelectorAll('.color')) {
    bgCol.classList.remove('color_active');
  }

  this.classList.add('color_active');
}
