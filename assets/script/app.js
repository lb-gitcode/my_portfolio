'use strict';

// get HTML element by ID
function getElement(selector, scope = document) { return scope.getElementById(selector); }
// select HTML element 
function select(selector, scope = document) { return scope.querySelector(selector); }
// select a list of HTML elements as an array
function selectAll(selector, scope = document) { return [...scope.querySelectorAll(selector)]; }
// adding event listener
function listen(event, selector, callback) { return selector.addEventListener(event, callback); }

// popping up

// get elements
const optionsIcon = getElement('options');
const closeModal = getElement('close-modal');
const popUpModal = getElement('pop-up-modal');

let popUp = false;

listen('click', optionsIcon, function() {
  if (popUp === false) {
    popUpModal.style.visibility = 'visible';
    popUpModal.style.opacity = '1';
    popUp = true;
  } else if (popUp === true) {
    popUpModal.style.visibility = 'hidden';
    popUpModal.style.opacity = '0';
    popUp = false;
  }
});

listen('click', closeModal, function() {
  popUpModal.style.visibility = 'hidden';
  popUpModal.style.opacity = '0';
  popUp = false;
});

// dark mode

// get elements
const darkModeButton = getElement('dark-mode');
let darkMode = false;

const root = select(':root');
function colourSet(property, colour) {
  root.style.setProperty(property, colour);
}

function toggleDarkMode() {
  if (darkMode === false) {
    darkModeButton.value = 'ON';
    colourSet('--primary-bg-colour', 'rgb(65, 65, 65)');
    colourSet('--primary-hero-colour', 'rgba(77, 77, 77, 0.8)');
    colourSet('--hero-border-colour', 'rgb(80, 80, 80)');
    colourSet('--secondary-text-colour', 'rgb(245, 245, 245)');
    colourSet('--primary-border-colour', 'rgb(40, 40, 40)');
    colourSet('--tertiary-text-colour', 'rgb(255, 255, 255)');
    colourSet('--primary-button-border', 'rgb(30, 30, 30)');
    colourSet('--primary-button-colour', 'rgb(43, 43, 43)');
    colourSet('--primary-button-hover', 'rgb(33, 33, 33)');
    colourSet('--primary-button-text', 'white');
    darkMode = true;
  } else if (darkMode === true) {
    darkModeButton.value = 'OFF';
    colourSet('--primary-bg-colour', 'white');
    colourSet('--primary-hero-colour', 'rgba(255, 255, 255, 0.8)');
    colourSet('--hero-border-colour', 'rgb(187, 187, 187)');
    colourSet('--secondary-text-colour', 'rgb(70, 70, 70)');
    colourSet('--primary-border-colour', 'rgb(179, 179, 179)');
    colourSet('--tertiary-text-colour', 'rgb(0, 0, 0)');
    colourSet('--primary-button-border', 'rgb(230, 230, 230)');
    colourSet('--primary-button-colour', 'rgb(240, 240, 240)');
    colourSet('--primary-button-hover', 'rgb(200, 200, 200)');
    colourSet('--primary-button-text', 'black');
    darkMode = false;
  }
}

listen('click', darkModeButton, toggleDarkMode);