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