import './App.css';
import DataTable from './PageComponents/DataTable';
import { useEffect } from 'react';
import getCountries from "./api/getCountries";
import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from './redux/countries';
import { setTotalPages } from './redux/pagination';
import Pagination from './PageComponents/Pagination';
import DashboardCards from './PageComponents/DashboardCards';

function App() {
  const { itemsPerPage } = useSelector((state) => state.pagination.value)
  const dispatch = useDispatch();

  const fetchData = async() =>  {
    const data = await getCountries();
    const totalPagesCount = Math.ceil(data.length / itemsPerPage);
    
    dispatch(setCountries(data));
    dispatch(setTotalPages(totalPagesCount));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Dashboard</h1>
      </header>
      <main>
        <DashboardCards/>
        <DataTable/>
        <Pagination/>
      </main>
    </div>
  );
}

export default App;
