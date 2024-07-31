import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const employee = {
      name,
      address,
      city,
      country,
      zipcode,
      email,
      phone,
    };
    try {
      await axios.post('https://free-ap-south-1.cosmocloud.io/development/api/employee', employee, {
        headers: {
          'projectId': '66a9e2e77104b51694601657',
          'environmentId': '66a9e2e77104b51694601658',
          'Content-Type': 'application/json',
        },
      });
      onSuccess();
    } catch (error) {
      console.error('There was an error adding the employee!', error.response.data);
    }
  };

  const formFieldStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '10px',
    width: '100px',
  };

  const inputStyle = {
    flex: '1',
    padding: '10px',
    fontSize: '1em',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#009879',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '1em',
    borderRadius: '5px',
    display: 'block',
    width: '100%',
    marginTop: '20px',
  };

  const formStyle = {
    backgroundImage: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '600px',
    margin: '20px auto',
    fontSize: '1em',
    color: '#333',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formFieldStyle}>
        <label style={labelStyle}>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
      </div>
      <div style={formFieldStyle}>
        <label style={labelStyle}>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required style={inputStyle} />
      </div>
      <div style={formFieldStyle}>
        <label style={labelStyle}>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required style={inputStyle} />
      </div>
      <div style={formFieldStyle}>
        <label style={labelStyle}>Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required style={inputStyle} />
      </div>
      <div style={formFieldStyle}>
        <label style={labelStyle}>Zip Code:</label>
        <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required style={inputStyle} />
      </div>
      <div style={formFieldStyle}>
        <label style={labelStyle}>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
      </div>
      <div style={formFieldStyle}>
        <label style={labelStyle}>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required style={inputStyle} />
      </div>
      <button type="submit" style={buttonStyle}>Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
