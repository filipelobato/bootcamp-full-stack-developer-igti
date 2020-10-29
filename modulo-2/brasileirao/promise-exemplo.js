init();

async function init() {
  try {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    /*     array.forEach(async function (item) {
      const result = await teste(item);
      console.log(result);
    }); */

    for (const i of array) {
      const result = await teste(i);
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
}

function teste(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(item);
    }, 2000);
  });
}
