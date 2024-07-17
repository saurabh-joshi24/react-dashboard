const CardContent = ({ item }) => <>
    <h1>
        <span>{item.name.common}</span>
        <span>{item.flag}</span>
    </h1>
    <p>{item.name.official}</p>
    <p>Population: {item.population}</p>
</>

export { CardContent }