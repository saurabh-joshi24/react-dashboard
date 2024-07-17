import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import getCountries from "../../api/getCountries";

import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from '../../redux/countries';

import DataTable from '../../components/DataTable';
import Pagination from '../../components/Pagination';
import DashboardCards from '../../components/DashboardCards';
import Header from '../../components/Header';

import { COUNTRY_COLUMNS } from '../../constants/countries';
import { INITIAL_PAGINATION_DATA } from '../../constants/pagination';

import { selectAllCountries, selectCountriesByPagination, selectTopCountriesByPopulation } from '../../selectors/countries';

import { CardContent } from '../../components/DashboardCards/CardContent';


function Dashboard() {
  const { data, isError, isPending, isSuccess } = useQuery({ queryKey: ['countries'], queryFn: getCountries });

  const dispatch = useDispatch();

  const [paginationData, setPaginationData] = useState(INITIAL_PAGINATION_DATA);
  const { itemsPerPage, indexOfFirstItem, indexOfLastItem } = paginationData;

  const countriesByPagination = selectCountriesByPagination(indexOfFirstItem, indexOfLastItem)
  const paginatedCountries = useSelector(countriesByPagination);
  const topCountriesByPopulation = useSelector(selectTopCountriesByPopulation);
  const allCountries = useSelector(selectAllCountries);

  useEffect(() => {
    // if api call is success then set countries and pagination data
    if (isSuccess && data && data.length) {
      const totalPagesCount = Math.ceil(data.length / INITIAL_PAGINATION_DATA.itemsPerPage);
  
      dispatch(setCountries(data));
      setPaginationData({ ...paginationData, totalPages: totalPagesCount });
    }

  }, [isSuccess, data])
  

  useEffect(() => {
    if (allCountries && allCountries.length) {
      const totalPagesCount = Math.ceil(allCountries.length / itemsPerPage);
      setPaginationData({ ...paginationData, totalPages: totalPagesCount });
     }
  }, [itemsPerPage, allCountries])

  const onPaginationChange = (pageData) => {
    setPaginationData(pageData);
  }

  return (
    <>
      <Header title="React Dashboard" />
      {
        isPending ? <div>Loading...</div> :
          isError || (data && data.length < 1) ? <div>Unable to fetch data please try again !</div> :
            <main>
              <DashboardCards datalist={topCountriesByPopulation} renderCardContent={(item) => <CardContent item={item}/>} />
              <DataTable datalist={paginatedCountries} columns={COUNTRY_COLUMNS} />
              <Pagination {...paginationData} onChange={onPaginationChange} />
            </main>
      }

    </>
  );
}

export default Dashboard;
