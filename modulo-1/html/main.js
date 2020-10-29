import { ambiente, somar } from './modules/util.js';

window.addEventListener('load', () => {
  let h1 = document.querySelector('h1');
  const resultado = somar(5, 5);

  h1.innerHTML = resultado;
});
