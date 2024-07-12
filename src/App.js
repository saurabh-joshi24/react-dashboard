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
import { selectAllCountries, selectCountriesByPagination, selectTopCountriesByPopulation } from './selectors/countries';
import { renderCardContent } from './utils/dashboardCard';


function App() {
  const dispatch = useDispatch();
  const [paginationData, setPaginationData] = useState(INITIAL_PAGINATION_DATA);
  const { itemsPerPage, indexOfFirstItem, indexOfLastItem } = paginationData;

  const countriesByPagination = selectCountriesByPagination(indexOfFirstItem, indexOfLastItem)
  
  const paginatedCountries = useSelector(countriesByPagination);
  const topCountriesByPopulation = useSelector(selectTopCountriesByPopulation);
  const allCountries = useSelector(selectAllCountries);

  const fetchData = async () => {
    const data = await getCountries();

    const totalPagesCount = Math.ceil(data.length / itemsPerPage);

    dispatch(setCountries(data));
    setPaginationData({ ...paginationData, totalPages: totalPagesCount });
  }

  useEffect(() => {
    const totalPagesCount = Math.ceil(allCountries.length / itemsPerPage);
    setPaginationData({ ...paginationData, totalPages: totalPagesCount });
  }, [itemsPerPage, allCountries])

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
        <DashboardCards datalist={topCountriesByPopulation} renderCardContent={renderCardContent} />
        <DataTable datalist={paginatedCountries} columns={COUNTRY_COLUMNS} />
        <Pagination {...paginationData} onChange={onPaginationChange} />
      </main>
    </div>
  );
}

export default App;
