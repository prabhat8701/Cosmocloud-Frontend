import React, { useState } from 'react';
import '../components/CSS_Files/UpdateEmployeeModal.css';

const UpdateEmployeeModal = ({ employee, onClose, onUpdate }) => {
  const [name, setName] = useState(employee.name);
  const [address, setAddress] = useState(employee.address);
  const [city, setCity] = useState(employee.city);
  const [country, setCountry] = useState(employee.country);
  const [zipcode, setZipcode] = useState(employee.zipcode);
  const [email, setEmail] = useState(employee.email);
  const [phone, setPhone] = useState(employee.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      ...employee,
      name,
      address,
      city,
      country,
      zipcode,
      email,
      phone,
    };
    onUpdate(updatedEmployee);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Update Employee</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-field">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-field">
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="form-field">
            <label>City:</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div className="form-field">
            <label>Country:</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
          </div>
          <div className="form-field">
            <label>Zip Code:</label>
            <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-field">
            <label>Phone:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <button type="submit" className="submit-button">Update Employee</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployeeModal;
