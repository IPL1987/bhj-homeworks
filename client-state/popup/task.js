'use strict'

debugger
const modalClose = document.getElementsByClassName('modal__close');
const modalShow = document.getElementById('subscribe-modal');

function closeWindow() {
  modalShow.className = 'modal';
  document.cookie = 'window=close';
};

window.onload = () => {
  const getCookie = (name) => {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      return parts
        .pop()
        .split(";")
        .shift()
    };
    modalShow.className = 'modal modal_active';
  };

  getCookie('window');
}
modalClose[0].addEventListener('click', closeWindow);