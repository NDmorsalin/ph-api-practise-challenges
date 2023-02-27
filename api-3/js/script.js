// load all country
const loadAllCounty = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const allCountry = await res.json();
  getAllLanguage(allCountry);
  getAllRegion(allCountry);
  getAllCapital(allCountry);
};

// get all languages all over the world
const getAllLanguage = async (allCountry) => {
  const languages = [];

  allCountry.forEach((country) => {
    const langsOfOneCountry = Object.values(
      country?.languages ? country?.languages : ""
    );

    langsOfOneCountry.forEach((lang) => {
      if (!languages.includes(lang)) {
        languages.push(lang);
      }
    });
  });

  displayAllLanguagesInInputField(languages);
};

// get all Region all over the world
const getAllRegion = async (allCountry) => {
  const region = [];

  allCountry.forEach((country) => {
    if (!region.includes(country.region)) {
      region.push(country.region);
    }
  });

  displayAllRegionInInputField(region);
};

// get all  capital city. all over the world
const getAllCapital = async (allCountry) => {
  const capital = [];

  allCountry.forEach((country) => {
    if (country.capital) {
      country.capital.forEach((cap) => {
        if (!capital.includes(cap)) {
          capital.push(cap);
        }
      });
    }
  });

  displayAllCapitalInInputField(capital);
};

// display language in input field dropdown
const languagesList = document.getElementById("languagesList");
const displayAllLanguagesInInputField = (languages) => {
  displayCommonInInputField(languages, languagesList);
};

// display region in input field dropdown
const regionList = document.getElementById("regionList");
const displayAllRegionInInputField = (region) => {
  displayCommonInInputField(region, regionList);
};

// display capital in input field dropdown
const capitalList = document.getElementById("capitalList");
const displayAllCapitalInInputField = (capital) => {
  displayCommonInInputField(capital, capitalList);
};

// display common function
const displayCommonInInputField = (fields, list) => {
  fields.forEach((field) => {
    const option = document.createElement("option");
    option.value = field;
    list.appendChild(option);
  });
};

// load countries by language
const loadCountriesByLanguage = async (lang) => {
  const url = `https://restcountries.com/v3.1/lang/${lang}`;
  const response = await fetch(url);

  const countries = await response.json();

  displayCountries(countries);
};

// load countries by region
const loadCountriesByRegion = async (region) => {
  const url = `https://restcountries.com/v3.1/region/${region}`;
  const response = await fetch(url);
  const countries = await response.json();
  displayCountries(countries);
};

// load countries by region
const loadCountriesByCapital = async (capital) => {
  const url = `https://restcountries.com/v3.1/capital/${capital}`;
  const response = await fetch(url);
  const countries = await response.json();
  displayCountries(countries);
};

// when changes the input fields value then load the countries list accordingly to that language
const languagesInputField = document.getElementById("languages");
languagesInputField.addEventListener("change", (event) => {
  loadCountriesByLanguage(event.target.value);
});

// when changes the input fields value then load the countries list accordingly to that region
const regionInputField = document.getElementById("region");
regionInputField.addEventListener("change", (event) => {
  loadCountriesByRegion(event.target.value);
});

// when changes the input fields value then load the countries list accordingly to that region
const capitalInputField = document.getElementById("capital");
capitalInputField.addEventListener("change", (event) => {
  loadCountriesByCapital(event.target.value);
});

const container = document.getElementById("container");
const displayCountries = (countries) => {
  container.innerHTML = "";
  countries.forEach((country) => {
    const col = document.createElement("div");
    col.classList.add("col-sm-4", "col-md-3", "mb-3");
    col.innerHTML = `<div class="card shadow">
      ${
        country.flags
          ? `<img height="3rem" src="${country.flags.png}" class=" img-fluid card-img-top" alt="${country.name.common}">`
          : ""
      }
      <div class="card-body">
        <h5 class="card-title">Country Name: ${country.name.common}</h5>
      </div>
    </div>`;

    container.appendChild(col);
  });
};
loadAllCounty();
