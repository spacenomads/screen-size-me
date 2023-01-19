const app = document.querySelector('.js-app');
const output = app.querySelector('.js-app-size');

function getScreenHeight() {
  return window.screen.height;
}

function getScreenWidth() {
  return window.screen.width;
}

function getBrowserHeight() {
  return window.innerHeight;
}

function getBrowserWidth() {
  return window.innerWidth;
}

function getSize() {
  return `<p><small>Pantalla:</small><br>${getScreenWidth()}x${getScreenHeight()} px</p>
  <p><small>Navegador:</small><br>${getBrowserWidth()}x${getBrowserHeight()} px</p>`;
}


function showResult() {
  output.innerHTML =  getSize();
}

window.addEventListener('resize', showResult);
showResult();

