import { Table, TableData, TableHeader } from "../../components/table";


const DataTable = ({ datalist, columns }) => {

    // this function allows to access nested value inside object like (a.nestedKeyA)
    const getValue = (item, accessor) => {
        return accessor.split('.').reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : '', item);
    };

    return (
        <Table>
            <thead>
                <tr>
                    {
                        columns.map((item, index) => (
                            <TableHeader key={index}>{item.header}</TableHeader>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    datalist.map((item, index) =>
                    (<tr key={index}>
                        {
                            columns.map((column) => (
                                <TableData key={column.accessor}>
                                    {column.cell ? column.cell(item) : getValue(item, column.accessor)}
                                </TableData>
                            ))
                        }
                    </tr>)
                    )
                }
            </tbody>
        </Table>
    )
}

export default DataTable;