import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate
import './RentCalculation.css'; // Import the CSS file

const RentCalculation = (props) => {
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState('');
  const [electricity, setElectricity] = useState('');
  const [previousBalance, setPreviousBalance] = useState('');
  const [rentPerHead, setRentPerHead] = useState('');
  const [totalWaterReading, setTotalWaterReading] = useState('');
  const [perUnit, setPerUnit] = useState('');
  // const [finalAmount, setFinalAmount] = useState('')

  // const {item} = location.state || {}

  const [error, setError] = useState('')

  const navigate = useNavigate(); // Initialize useNavigate

  // Fetching the user details
  useEffect(() => {
    Axios.get('http://localhost:3000/api/getusers')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log('Error fetching data: ', err);
      });
  }, []);


  

  const handleSubmit = (event) => {
    event.preventDefault();

    // setError("")
    // let hasError = false

    // if(!electricity || previousBalance || rentPerHead || totalWaterReading || perUnit || usedByName){
    //   setError(`Required`)
    //   hasError = true
    // }

    // if(hasError){
    //   return
    // }

    const formData = {
      electricity: parseInt(electricity, 10), // Ensure the data types match the backend schema
      previousBalance: parseInt(previousBalance, 10),
      rentPerHead: parseInt(rentPerHead, 10),
      totalWaterReading: parseInt(totalWaterReading, 10),
      perUnit: parseFloat(perUnit),
      usedByName: selectedUser // Match the backend expected key
    };

    Axios.post('http://localhost:3000/api/createrent', formData)
      .then(res => {
        console.log('Form submitted successfully:', res.data);
      })
      .catch(err => {
        console.log('Error submitting form:', err);
      });
  };


  const styles = {
    error: {
      color: "red",
      fontSize: "12px",
    }
  }

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <h2>Rent Calculation</h2>
      {data && (
        <form onSubmit={handleSubmit}>
          <Dropdown
            label="Select a user"
            options={data.map(item => ({ label: item.name, value: item.name }))}
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          />

          <p>Selected User: {selectedUser}</p>
          {/* {error && <span style={styles.error}>{error}</span>} */}
          <label>
            Electricity (unit):
            <input
              type="text"
              value={electricity}
              onChange={(e) => setElectricity(e.target.value)}
            />
          </label>
          {/* {error && <span style={styles.error}>{error}</span>} */}
          <label>
            Previous Balance (Rs.):
            <input
              type="text"
              value={previousBalance}
              onChange={(e) => setPreviousBalance(e.target.value)}
            />
          </label>
          {/* {error && <span style={styles.error}>{error}</span>} */}
          <label>
            Rent Per Head (Rs.):
            <input
              type="text"
              value={rentPerHead}
              onChange={(e) => setRentPerHead(e.target.value)}
            />
          </label>
          {/* {error && <span style={styles.error}>{error}</span>} */}
          <label>
            Total Water Reading (unit):
            <input
              type="text"
              value={totalWaterReading}
              onChange={(e) => setTotalWaterReading(e.target.value)}
            />
          </label>
          {/* {error && <span style={styles.error}>{error}</span>} */}
          <label>
            Per Unit (Rs.):
            <input
              type="text"
              value={perUnit}
              onChange={(e) => setPerUnit(e.target.value)}
            />
          </label>
          {/* {error && <span style={styles.error}>{error}</span>} */}
          <button type="submit">Submit</button>
          {/* <div> */}
          {/* {item.totalRent.map (rent => ( */}

            {/* // <span> Total Amount calculated: {rent.totalAmountCalculated}</span> */}
          {/* ) */}
          {/* )} */}
          {/* </div> */}
        </form>
      )}
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        <option value="" disabled>Select a user</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default RentCalculation;
