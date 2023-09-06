import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OverView = () => {
  const { companyDetail: { image } } = useSelector((state) => state.companies);
  const style = {
    borderBottom: '1px solid black',
    color: 'black',
    padding: '2px',
  };
  return (
    <div className=" bg-slate-400 mb-3">
      <div className="flex justify-center items-start gap-6">
        <div className="">
          <img src={image} alt="" className=" object-cover" />
        </div>
      </div>
      <nav className="flex py-2 w-full">
        <ul className="flex w-[55%] mx-auto justify-between gap-4">
          <li>
            <NavLink
              to="."
              end
              className="text-white text-xl"
              style={({ isActive }) => (isActive ? style : {})}
            >
              Info
            </NavLink>
          </li>
          <li>
            <NavLink
              to="description"
              className="text-white text-xl"
              style={({ isActive }) => (isActive ? style : {})}
            >
              Description
            </NavLink>
          </li>
          <li>
            <NavLink
              to="statement"
              className="text-white text-xl"
              style={({ isActive }) => (isActive ? style : {})}
            >
              Statement
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OverView;
