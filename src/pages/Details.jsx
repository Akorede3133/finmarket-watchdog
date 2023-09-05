import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import OverView from '../components/OverView';
import { getCompanyDetail } from '../redux/companies/companiesSlice';

const Details = () => {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyDetail(symbol));
  }, []);
  return (
    <div>
      <OverView />
      <Outlet />
    </div>
  );
};

export default Details;
