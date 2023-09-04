import React from 'react';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';

const CompanyCard = () => (
  <div className="card text-white flex flex-col items-end justify-between w-[400px] h-[250px] bg-center bg-no-repeat bg-cover p-3 ">
    <div>
      <HiOutlineArrowRightCircle style={{ fontSize: '1.6rem' }} />
    </div>
    <h2 className=" flex flex-col gap-2">
      <p className=" text-2xl ">
        Novo Integrated Sciences, Inc.
      </p>
      <span className="bg-slate-600 self-end rounded-md py-1 px-3 tracking-widest">NVOS</span>
      <span className="self-end text-2xl">$0.215</span>
    </h2>
  </div>
);

export default CompanyCard;
