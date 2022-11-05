'use strict';

// Вывод активного окна
let modalMain = document.getElementById('modal_main')
let modalSuccess = document.getElementById('modal_success')
modalMain.classList.add('modal_active');

// Закрытие активных окон
document.querySelector('div.modal a.btn_danger').onclick = function () {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
};

// document.querySelector('div.modal__close_times').onclick = function () {
//   modalMain.classList.remove('modal_active');
//   modalSuccess.classList.remove('modal_active');
// };
//-------
// Обьясните пожалуйста, почему такой вариант не работает, и как исправить?
//-------

let arr = Array.from(document.querySelectorAll('div.modal__close_times'))
function closePopup() {
  arr.forEach((modal) => {
    modal.onclick = function () {
      modal.closest('div.modal').classList.remove('modal_active');
    };
  });
};
closePopup();


