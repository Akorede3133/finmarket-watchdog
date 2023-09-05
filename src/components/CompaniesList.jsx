import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CompanyCard from './CompanyCard';

const CompaniesList = () => {
  const { filteredCompanies, typing, companies } = useSelector((state) => state.companies);
  const display = typing ? filteredCompanies : companies;
  if (display.length === 0) {
    return <h2>sorry</h2>;
  }
  return (
    <ul className=" grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
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
