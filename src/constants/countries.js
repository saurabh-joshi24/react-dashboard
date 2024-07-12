const COUNTRY_COLUMNS = [
    { header: "Flag", accessor: "flag" },
    { header: "Country Name", accessor: "name.official" },
    { header: "Capital", cell: (item) => item.capital?.[0] || '' },
    { header: "Population", accessor: "population" },
    { header: "Area (in km square)", accessor: "area" },
    { header: "UN Member", cell: (item) => item.unMember ? "Yes" : "No" },
    { header: "Region", accessor: "region" },
    { header: "Subregion", accessor: "subregion" }
]

export { COUNTRY_COLUMNS }