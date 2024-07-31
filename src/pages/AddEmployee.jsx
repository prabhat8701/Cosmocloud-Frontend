import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <EmployeeForm onSuccess={handleSuccess} />
    </div>
  );
};

export default AddEmployee;
