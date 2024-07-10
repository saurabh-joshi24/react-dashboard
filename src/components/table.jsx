import styled from "styled-components";

const Table = styled.table`
  width: 90%;  
  margin: 0 auto;
  border-collapse: collapse;
  margin-bottom: 20px;
`

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
`;

const TableData = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 8px;
`;


export { Table, TableHeader, TableData }