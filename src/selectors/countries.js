import { createSelector } from "@reduxjs/toolkit";

const selectCountries = state => state.countries.value;

const selectAllCountries = createSelector([selectCountries], (countries) => countries)

const selectCountriesByPagination = (firstItemIndex, lastItemIndex) => createSelector(selectAllCountries, (countries) => countries.slice(firstItemIndex, lastItemIndex))

export { selectAllCountries, selectCountriesByPagination }