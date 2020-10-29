import * as formUploader from './formUploader.js';

window.addEventListener('load', () => {
  const btn = document.querySelector('button');
  btn.addEventListener('click', formUploader.formSubmit);
});
