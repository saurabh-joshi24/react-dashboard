import { useSelector } from "react-redux";
import { Table, TableData, TableHeader } from "../components/table";


const DataTable = () => {
    const countries = useSelector((state) => state.countries.value)

    return (
        <Table>
            <thead>
                <tr>
                    <TableHeader>S.No</TableHeader>
                    <TableHeader>Flag</TableHeader>
                    <TableHeader>Country Name</TableHeader>
                    <TableHeader>Capital</TableHeader>
                    <TableHeader>Population</TableHeader>
                    <TableHeader>Area</TableHeader>
                    <TableHeader>UN Member</TableHeader>
                    <TableHeader>Region</TableHeader>
                </tr>
            </thead>
            <tbody>
                {
                    countries.map((data, index) =>
                    (<tr key={data.name?.common}>
                        <TableData>{index + 1}</TableData>
                        <TableData>{data.flag}</TableData>
                        <TableData>{data.name?.official}</TableData>
                        <TableData>{data.capital && data.capital.length ? data.capital[0] : ""}</TableData>
                        <TableData>{data.population}</TableData>
                        <TableData>{data.area}</TableData>
                        <TableData>{data.unMember ? "Yes" : "No"}</TableData>
                        <TableData>{data.region}</TableData>
                    </tr>)
                    )
                }
            </tbody>
        </Table>
    )
}

export default DataTable;