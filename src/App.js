import './App.css';
import DataTable from './Pages/DataTable/DataTable';
import { useState, useEffect } from 'react';
import getCountries from "./api/getCountries";
import { useDispatch } from 'react-redux';
import { setCountries } from './redux/countries';
import Pagination from './Pages/Pagination/Pagination';
import DashboardCards from './Pages/DashboardCards/DashboardCards';

const initialPaginationData = {
  currentPage: 1, 
  totalPages: 1, 
  pageLimit: 5, 
  itemsPerPage: 20, 
  indexOfLastItem: 0,
  indexOfFirstItem: 0
}


function App() {
  const dispatch = useDispatch();

  const [paginationData, setPaginationData] = useState(initialPaginationData);

  const { itemsPerPage, currentPage } = paginationData;

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
        <DataTable currentPage={currentPage} itemsPerPage={itemsPerPage}/>
        <Pagination {...paginationData} onChange={onPaginationChange} />
      </main>
    </div>
  );
}

export default App;
