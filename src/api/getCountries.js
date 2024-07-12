const getCountries = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_COUNTRIES_API_BASE_URL}/all`);
        if (!response.ok) {
            throw new Error("Network error failure")
        }
        const data = await response.json();
        return data;

    } catch (err) {
        console.error(err);
        return [];

    }
}

export default getCountries;