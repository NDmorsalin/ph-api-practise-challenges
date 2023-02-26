// load all country
const loadAllCounty = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const allCountry = await res.json();
  getAllLanguage(allCountry);
 
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

// display language in input field dropdown
const languagesList = document.getElementById("languagesList");

const displayAllLanguagesInInputField = (languages) => {
  languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language;

    languagesList.appendChild(option);
  });
};

// load countries by language
const loadCountriesByLanguage = async (lang) => {
  const url = `https://restcountries.com/v3.1/lang/${lang}`;
  const response = await fetch(url);

  const countries = await response.json();

  console.log(countries);
};

// when changes the input fields value then load the countries list accordingly to that language
const languagesInputField = document.getElementById("languages");
languagesInputField.addEventListener("change", (event) => {
  loadCountriesByLanguage(event.target.value);
});
loadAllCounty();
