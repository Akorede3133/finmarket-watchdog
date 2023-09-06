import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyStatement } from '../redux/companies/companiesSlice';

const FinancialStatement = () => {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const { statement } = useSelector((state) => state.companies);
  useEffect(() => {
    dispatch(getCompanyStatement(symbol));
  }, [symbol, dispatch]);
  console.log(statement);
  return (
    <div>
      <table className="w-full">
        <tbody>
          <tr>
            <th className="w-[10%]">Year</th>
            <th>Income</th>
            <th>Expenses</th>
            <th>Gross Profit</th>
          </tr>
          <tr>
            <td className="w-[10%]">2022</td>
            <td className="w-[10%]">$99803000000</td>
            <td className="whitespace-nowrap w-[10%]">
              $51345000000
            </td>
            <td className="w-[10%]">$170782000000</td>
          </tr>
          <tr>
            <td className="w-[10%]">2022</td>
            <td className="w-[10%]">$99803000000</td>
            <td className="whitespace-nowrap w-[10%]">
              $51345000000
            </td>
            <td className="w-[10%]">$170782000000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinancialStatement;
