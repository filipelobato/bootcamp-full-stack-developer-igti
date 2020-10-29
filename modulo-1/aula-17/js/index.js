/* Estado da aplicação */
let countries = [];
let tabFavorites = null;

let countriesFavorites = [];
let countriesNotFav = document.querySelector('.countries-not-fav');
let itemCountry;
const URL_API = 'http://restcountries.eu/rest/v2/all';

window.addEventListener('load', start);

async function start() {
  await loadCountries();
  await fillCountries();
  await initHtml();
}
async function initHtml() {
  itemCountry = document.querySelector('.item-country');
  itemCountry.addEventListener('click', addFavorites);
}

async function loadCountries() {
  countries = Array.from(await (await fetch(URL_API)).json()).map(
    ({ translations: { br: name }, population, flag, numericCode: id }) => {
      return { name, population, flag, id };
    }
  );
  console.log(countries);
}

async function fillCountries() {
  for (const country of countries) {
    const countryHtml = document.createElement('div');
    countryHtml.innerHTML = `<a id="${country.id}" class="waves-effect waves-light btn item-country">
    +
  </a>
  <img
    src="${country.flag}"
    alt="${country.name}"
    width="50px"
  />
  <div class="data-countries">
    <span class="text"><b>${country.name}</b> </span>
    <span class="text">${country.population} </span>
  </div>`;
    countriesNotFav.appendChild(countryHtml);
  }
  const countCountriesSpan = document.querySelector('#countCountries');
  countCountriesSpan.innerHTML = countries.length;
  const countFavorites = document.querySelector('#countFavorites');
  countFavorites.innerHTML = countries.length;

  let itensCountries = Array.from(document.querySelectorAll('.item-country'));
  itensCountries.forEach((item) => {
    item.addEventListener('click', addFavorites);
  });
}

function addFavorites({ target: { id } }) {
  countriesFavorites.push(countries.filter((item) => item.id === id));
  countries.findIndex((item) => item.id === id);
  const index = countries.findIndex((item) => item.id === id);
  countries.slice(index, 1);
  console.log('Fav===> ' + countriesFavorites.length);
  console.log('TOTAL => ' + countries.length);
}
