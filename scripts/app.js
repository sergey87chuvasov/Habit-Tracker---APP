'use strict';

// our app state of habbits
let habbits = [];

const HABBIT_KEY = 'HABBIT_KEY';

/* utils */

// get data from users and put in []
function loadData() {
  const habbitsString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitArray)) {
    habbits = habbitArray;
  }
}

// save data from []
function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

// test iif
(() => {
  loadData();
})();
