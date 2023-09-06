import { useOutletContext } from 'react-router-dom';

const FinancialStatement = () => {
  const details = useOutletContext();
  console.log(details);

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
