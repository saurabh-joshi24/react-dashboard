import { createSelector } from "@reduxjs/toolkit";

const selectCountries = state => state.countries.value;

const getCountriesSelector = createSelector([selectCountries], (countries) =>  countries)

export { getCountriesSelector }