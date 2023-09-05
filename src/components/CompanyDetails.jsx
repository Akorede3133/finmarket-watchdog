import React from 'react';

const CompanyDetails = () => (
  <div className="mt-5 w-[90%] mx-auto">
    <table className="w-full">
      <tbody>
        <tr>
          <th>Name</th>
          <td>Tesla</td>
        </tr>
        <tr>
          <th>industry</th>
          <td>Auto Manufacturers</td>
        </tr>
        <tr>
          <th>CEO</th>
          <td>Mr Elon MUsk</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>US</td>
        </tr>
        <tr>
          <th>website</th>
          <td><a href="https://www.tesla.com" className=" text-blue-400">Tesla</a></td>
        </tr>
        <tr>
          <th>phone</th>
          <td>512 516 8177</td>
        </tr>
        <tr>
          <th>address</th>
          <td>1 Tesla Road</td>
        </tr>
        <tr>
          <th>city</th>
          <td>Austin</td>
        </tr>
        <tr>
          <th>state</th>
          <td>TX</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>$245.0</td>
        </tr>
        <tr>
          <th>Price change</th>
          <td>$45.0</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CompanyDetails;
