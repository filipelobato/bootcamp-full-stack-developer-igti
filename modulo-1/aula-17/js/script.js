/**
 * Estado da aplicação (state)
 */
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;
const URL_API = 'http://restcountries.eu/rest/v2/all';

window.addEventListener('load', start);

async function start() {
  await startComponents();
  await loadCountries();
}

async function startComponents() {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');

  totalPopulationList = document.querySelector('#totalPopulationList');
  // prettier-ignore
  totalPopulationFavorites = 
    document.querySelector('#totalPopulationFavorites'
  );

  numberFormat = Intl.NumberFormat('pt-BR');
}

async function loadCountries() {
  const res = await fetch(URL_API);
  const json = await res.json();

  allCountries = json.map(
    ({ numericCode: id, translations: { br: name }, population, flag }) => {
      return {
        id,
        name,
        population,
        formattedPopulation: formatNumber(population),
        flag,
      };
    }
  );

  render();
}

function render() {
  renderFavorites();
  renderSummary();
  renderCountryList();
  handleCountryButtons();
}

function renderCountryList() {
  let countriesHTML = '<div>';

  allCountries.forEach((country) => {
    const { name, flag, id, population, formattedPopulation } = country;

    const countryHtml = `
      <div class='country'>
        <div>
          <a id="${id}" class="waves-effect waves-light btn">
            +
          </a>
        </div>
        <div>
          <img src="${flag}" alt="${name}">
        </div>
        <div>
          <ul>
            <li>${name}</li>
            <li>${formattedPopulation}</li>
          <ul>
        </div>
      </div>
    `;

    countriesHTML += countryHtml;
  });
  countriesHTML += '</div>';
  tabCountries.innerHTML = countriesHTML;
}
function renderFavorites() {
  let favoritesHTML = '<div>';

  favoriteCountries.forEach((country) => {
    const { id, name, flag, population, formattedPopulation } = country;

    const favoriteCountryHTML = `
    <div class='country'>
      <div>
        <a id="${id}" class="waves-effect waves-light btn red">
          -
        </a>
      </div>
      <div>
        <img src="${flag}" alt="${name}">
      </div>
      <div>
        <ul>
          <li>${name}</li>
          <li>${formattedPopulation}</li>
        <ul>
      </div>
    </div>
  `;
    favoritesHTML += favoriteCountryHTML;
  });

  favoritesHTML += '</div>';
  tabFavorites.innerHTML = favoritesHTML;
}
function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalpopulation = allCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);

  totalPopulationList.textContent = formatNumber(totalpopulation);
  totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}
function handleCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach((button) =>
    button.addEventListener('click', () => addToFavorites(button.id))
  );

  favoriteButtons.forEach((button) =>
    button.addEventListener('click', () => removeFromFavorites(button.id))
  );

  function addToFavorites(id) {
    const countryToAdd = allCountries.find((country) => country.id === id);

    favoriteCountries = [...favoriteCountries, countryToAdd];
    favoriteCountries.sort((a, b) => a.name.localeCompare(b.name));

    allCountries = allCountries.filter((country) => country.id !== id);
    render();
  }

  function removeFromFavorites(id) {
    // prettier-ignore
    const countryToRemove = 
      favoriteCountries.find(country => country.id === id);

    allCountries = [...allCountries, countryToRemove];
    allCountries.sort((a, b) => a.name.localeCompare(b.name));

    // prettier-ignore
    favoriteCountries = 
      favoriteCountries.filter((country) => country.id !== id);

    render();
  }
}

function formatNumber(number) {
  return numberFormat.format(number);
}
