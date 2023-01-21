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

function getSizes() {
  return {
    screen: {
      width: getScreenWidth(),
      height: getScreenHeight(),
    },
    browser: {
      width: getBrowserWidth(),
      height: getBrowserHeight(),
    },
  };
}

function getScreenSizeByOrientation(isLandscape, userScreen) {
  return isLandscape & userScreen.width < userScreen.height
    ?
    `${userScreen.height}x${userScreen.width}`
    :
    `${userScreen.width}x${userScreen.height}`;
}


function getDeviceOrientation(isLandscape, userScreen) {
  return isLandscape || !isLandscape & userScreen.width > userScreen.height ? 'Landscape' : 'Portrait';
}


function getSizeTemplate(orientation, screenSize, sizes) {
  return `
    <p class="app__size-block app__size-block--screen app__size-block--${orientation.toLowerCase()}">
      <span class="app__size-icon"></span>
      <span class="app__size-title">Screen (${orientation}):</span>
      <span class="app__size-value">${screenSize} px</span>
    </p>
    <p class="app__size-block">
      <span class="app__size-title">Browser:</span>
      <span class="app__size-value">${sizes.browser.width}x${sizes.browser.height} px</span>
    </p>`;
}


function getSize() {
  const sizes = getSizes();
  const isLandscape = window.matchMedia('(orientation: landscape)').matches;
  const orientation = getDeviceOrientation(isLandscape, sizes.screen);
  const screenSize = getScreenSizeByOrientation(isLandscape, sizes.screen);
  return getSizeTemplate(orientation, screenSize, sizes);
}

function showResult() {
  output.innerHTML = getSize();
}

window.addEventListener('resize', showResult);
showResult();

