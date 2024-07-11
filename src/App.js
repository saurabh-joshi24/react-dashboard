import './App.css';
import DataTable from './PageComponents/DataTable';
import { useEffect } from 'react';
import getCountries from "./api/getCountries";
import { useDispatch } from 'react-redux';
import { setCountries } from './redux/countries';
import DashboardCards from './PageComponents/DashboardCards';

function App() {
  const dispatch = useDispatch();

  const fetchData = async() =>  {
    const data = await getCountries();
    dispatch(setCountries(data))
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
      </main>
    </div>
  );
}

export default App;
