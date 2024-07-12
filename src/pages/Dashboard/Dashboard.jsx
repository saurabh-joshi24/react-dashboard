import { useState, useEffect } from 'react';

import getCountries from "../../api/getCountries";

import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from '../../redux/countries';

import DataTable from '../../components/DataTable/DataTable';
import Pagination from '../../components/Pagination/Pagination';
import DashboardCards from '../../components/DashboardCards/DashboardCards';
import Header from '../../components/Header/Header';

import { COUNTRY_COLUMNS } from '../../constants/countries';
import { INITIAL_PAGINATION_DATA } from '../../constants/pagination';

import { selectAllCountries, selectCountriesByPagination, selectTopCountriesByPopulation } from '../../selectors/countries';

import { renderCardContent } from '../../utils/dashboardCard';


function Dashboard() {
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
    <>
      <Header title="React Dashboard"/>
      <main>
        <DashboardCards datalist={topCountriesByPopulation} renderCardContent={renderCardContent} />
        <DataTable datalist={paginatedCountries} columns={COUNTRY_COLUMNS} />
        <Pagination {...paginationData} onChange={onPaginationChange} />
      </main>
    </>
  );
}

export default Dashboard;
