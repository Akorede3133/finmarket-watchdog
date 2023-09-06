import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OverView from '../components/OverView';
import { getCompanyDetail } from '../redux/companies/companiesSlice';

const Details = () => {
  const { symbol } = useParams();
  const { companyDetail, loading } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyDetail(symbol));
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="bg-slate-400 p-4 min-h-screen">
      <OverView image={companyDetail?.image} />
      <Outlet context={companyDetail} />
    </div>
  );
};

export default Details;
