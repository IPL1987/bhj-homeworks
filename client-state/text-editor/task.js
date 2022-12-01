'use strict'

debugger
const editor = document.getElementById('editor');
const reset = document.getElementById('reset');

if (localStorage.editText !== null) {
  editor.value = localStorage.editText;
}

window.addEventListener('unload', () => {
  const textArea = editor.value;
  if (textArea == undefined) {
    textArea = '';
  } else if (textArea !== undefined) {
    localStorage.setItem('editText', textArea);
  }
})

reset.addEventListener('click', () => {
  localStorage.clear();
  editor.value = '';
});