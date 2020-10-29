/* import { promises as fs } from 'fs'; */
var fs = require('fs');

const times = [];

init();

async function init() {
  try {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array.forEach(async function () {
      const result = await teste(x);
    });
  } catch (error) {
    console.log(error);
  }
}

async function teste(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 5000);
  });
}
