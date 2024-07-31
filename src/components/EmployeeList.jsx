import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UpdateEmployeeModal from './UpdateEmployeeModal';
import ConfirmationModal from './ConfirmationModal';
import '../components/CSS_Files/EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const limit = 10;
  const offset = 0;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://free-ap-south-1.cosmocloud.io/development/api/employee', {
          headers: {
            'projectId': '66a9e2e77104b51694601657',
            'environmentId': '66a9e2e77104b51694601658'
          },
          params: {
            limit: limit,
            offset: offset
          }
        });
        setEmployees(response.data.data); // Access the data property
      } catch (error) {
        console.error('There was an error fetching the employees!', error);
        setEmployees([]);
      }
    };
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`https://free-ap-south-1.cosmocloud.io/development/api/employee/${id}`, {
        headers: {
          'projectId': '66a9e2e77104b51694601657',
          'environmentId': '66a9e2e77104b51694601658',
          'Content-Type': 'application/json'
        },
        data: {
          id: id
        }
      });
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error('There was an error deleting the employee!', error.response.data);
    }
  };

  const openUpdateModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const handleUpdate = async (updatedEmployee) => {
    try {
      const { _id, ...data } = updatedEmployee;
      await axios.patch(`https://free-ap-south-1.cosmocloud.io/development/api/employee/${_id}`, data, {
        headers: {
          'projectId': '66a9e2e77104b51694601657',
          'environmentId': '66a9e2e77104b51694601658',
          'Content-Type': 'application/json'
        }
      });
      setEmployees(employees.map((emp) => (emp._id === _id ? updatedEmployee : emp)));
      closeUpdateModal();
    } catch (error) {
      console.error('There was an error updating the employee!', error.response.data);
    }
  };

  const openConfirmationModal = (employee) => {
    setEmployeeToDelete(employee);
    setIsConfirmationOpen(true);
  };

  const closeConfirmationModal = () => {
    setEmployeeToDelete(null);
    setIsConfirmationOpen(false);
  };

  const handleConfirmDelete = () => {
    deleteEmployee(employeeToDelete._id);
    closeConfirmationModal();
  };

  if (!Array.isArray(employees)) {
    return <p>Failed to load employees</p>;
  }

  return (
    <div>
      {employees.length === 0 ? (
        <p>No Employees in the system</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr style={{ textAlign: 'center' }}>
              <th>Serial No.</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee._id}>
                <td>{index + 1}</td>
                <td>{employee._id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td><Link to={`/employee/${employee._id}`}>Details</Link>{' '}</td>
                <td>
                  <button onClick={() => openUpdateModal(employee)}>Update</button>{' '}
                  <button onClick={() => openConfirmationModal(employee)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isModalOpen && selectedEmployee && (
        <UpdateEmployeeModal
          employee={selectedEmployee}
          onClose={closeUpdateModal}
          onUpdate={handleUpdate}
        />
      )}
      {isConfirmationOpen && (
        <ConfirmationModal
          message="Are you sure you want to delete this employee?"
          onConfirm={handleConfirmDelete}
          onCancel={closeConfirmationModal}
        />
      )}
    </div>
  );
};

export default EmployeeList;
