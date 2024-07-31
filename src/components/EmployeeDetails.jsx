import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../components/CSS_Files/EmployeeDetails.css';
import { FaRegUser } from "react-icons/fa";
const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`https://free-ap-south-1.cosmocloud.io/development/api/employee/${id}`, {
          headers: {
            'projectId': '66a9e2e77104b51694601657',
            'environmentId': '66a9e2e77104b51694601658'
          }
        });
        setEmployee(response.data);
      } catch (error) {
        console.error('There was an error fetching the employee!', error);
      }
    };
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card">
      <h2><FaRegUser style={{width:'2rem',marginTop:'0.5rem'}}/>{employee.name}</h2>
      <h6>Employee ID: {employee._id}</h6>
      <div className="card-details">
        <p><strong>Address:</strong> {employee.address}</p>
        <p><strong>City:</strong> {employee.city}</p>
        <p><strong>Country:</strong> {employee.country}</p>
        <p><strong>ZipCode:</strong> {employee.zipcode}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
      </div>
    </div>
  );
};

export default EmployeeDetails;
