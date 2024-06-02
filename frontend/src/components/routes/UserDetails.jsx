// src/components/routes/UserDetail.jsx
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './UserDetails.css'

function UserDetail() {
  const { name } = useParams();
  const location = useLocation();
  const { item } = location.state || {};

  const navigate = useNavigate() 

  return (
    <div className='container'>
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h1>User Detail for {name}</h1>
      {item ? (
        <div className='inner-container'>
          <p>Name: {item.name}</p>
          <p>Address: {item.address}</p>
          <h3>Rents:</h3>
          <table>
            <thead>
              <tr>
                <th>Electricity</th>
                <th>Previous Balance</th>
                <th>Rent per Head</th>
                <th>Total Water Reading</th>
                <th>Per Unit</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {item.totalRent.map((rent) => (
                <tr key={rent.id}>
                  <td>{rent.electricity}</td>
                  <td>{rent.previousBalance}</td>
                  <td>{rent.rentPerHead}</td>
                  <td>{rent.totalWaterReading}</td>
                  <td>{rent.perUnit}</td>
                  <td>{rent.totalAmountCalculated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default UserDetail;
