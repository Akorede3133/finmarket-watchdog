// import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import OverView from '../components/OverView';
// import { getCompanyDetail } from '../redux/companies/companiesSlice';

const Details = () => {
  const { symbol } = useParams();
  console.log(symbol);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCompanyDetail(symbol));
  // }, []);
  return (
    <div className="bg-slate-400 p-4 min-h-screen">
      <OverView />
      <Outlet />
    </div>
  );
};

export default Details;
