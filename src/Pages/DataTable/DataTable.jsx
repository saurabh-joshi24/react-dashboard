import { useSelector } from "react-redux";
import { Table, TableData, TableHeader } from "../../components/table";


const DataTable = () => {
    const countries = useSelector((state) => state.countries.value);
    const { indexOfFirstItem, indexOfLastItem } = useSelector((state) => state.pagination.value);

    return (
        <Table>
            <thead>
                <tr>
                    <TableHeader>Flag</TableHeader>
                    <TableHeader>Country Name</TableHeader>
                    <TableHeader>Capital</TableHeader>
                    <TableHeader>Population</TableHeader>
                    <TableHeader>Area (in km square)</TableHeader>
                    <TableHeader>UN Member</TableHeader>
                    <TableHeader>Region</TableHeader>
                    <TableHeader>Subregion</TableHeader>
                </tr>
            </thead>
            <tbody>
                {
                    countries.slice(indexOfFirstItem, indexOfLastItem).map((data, index) =>
                    (<tr key={data.name?.common}>
                        <TableData>{data.flag}</TableData>
                        <TableData>{data.name?.official}</TableData>
                        <TableData>{data.capital && data.capital.length ? data.capital[0] : ""}</TableData>
                        <TableData>{data.population}</TableData>
                        <TableData>{data.area}</TableData>
                        <TableData>{data.unMember ? "Yes" : "No"}</TableData>
                        <TableData>{data.region}</TableData>
                        <TableData>{data.subregion}</TableData>
                    </tr>)
                    )
                }
            </tbody>
        </Table>
    )
}

export default DataTable;