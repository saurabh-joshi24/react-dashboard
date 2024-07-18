import { createSelector } from "@reduxjs/toolkit";

const selectCountries = state => state.countries.value;

const selectAllCountries = createSelector([selectCountries], (countries) => countries)

const selectCountriesByPagination = (firstItemIndex, lastItemIndex) => createSelector(selectAllCountries, (countries) => countries.slice(firstItemIndex, lastItemIndex))

const selectTopCountriesByPopulation = createSelector(
    selectAllCountries,
    (countries) => {
        // sorting countries by population in descending order
        const sortedCountries = countries.slice().sort((a, b) => b.population - a.population);
        return sortedCountries.slice(0, 4);
    }
);

export { selectAllCountries, selectCountriesByPagination, selectTopCountriesByPopulation }