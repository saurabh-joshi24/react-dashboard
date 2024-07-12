import './App.css';
import DataTable from './Pages/DataTable/DataTable';
import { useState, useEffect } from 'react';
import getCountries from "./api/getCountries";
import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from './redux/countries';
import Pagination from './Pages/Pagination/Pagination';
import DashboardCards from './Pages/DashboardCards/DashboardCards';
import { COUNTRY_COLUMNS } from './constants/countries';
import { INITIAL_PAGINATION_DATA } from './constants/pagination';


function App() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries.value)

  const [paginationData, setPaginationData] = useState(INITIAL_PAGINATION_DATA);

  const { itemsPerPage, indexOfFirstItem, indexOfLastItem } = paginationData;

  const fetchData = async () => {
    const data = await getCountries();

    const totalPagesCount = Math.ceil(data.length / itemsPerPage);

    dispatch(setCountries(data));
    setPaginationData({ ...paginationData, totalPages: totalPagesCount });
  }

  useEffect(() => {
    fetchData();
  }, [])

  const onPaginationChange = (pageData) => {
    setPaginationData(pageData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Dashboard</h1>
      </header>
      <main>
        <DashboardCards />
        <DataTable datalist={countries.slice(indexOfFirstItem, indexOfLastItem)} columns={COUNTRY_COLUMNS} />
        <Pagination {...paginationData} onChange={onPaginationChange} />
      </main>
    </div>
  );
}

export default App;
