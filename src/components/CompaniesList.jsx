import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CompanyCard from './CompanyCard';
import NoMatchFound from './NoMatchFound';

const CompaniesList = () => {
  const { filteredCompanies, typing, companies } = useSelector((state) => state.companies);
  const display = typing ? filteredCompanies : companies;
  if (display.length === 0 && typing) {
    return <NoMatchFound message="Sorry, No Match Was Found" />;
  }
  if (display.length === 0 && !typing) {
    return <NoMatchFound message="Sorry, Cannot fetch data at the moment, check back tommorrow" />;
  }
  return (
    <ul className="grid py-3 gap-2 grid-cols-2">
      {
    display.map((company) => {
      const { name, price, symbol } = company;
      return (
        <Link to={`details/${symbol}`} key={symbol}>
          <CompanyCard name={name} price={price} symbol={symbol} />
        </Link>
      );
    })
  }
    </ul>
  );
};

export default CompaniesList;
