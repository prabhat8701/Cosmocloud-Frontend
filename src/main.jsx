import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import AddEmployee from './pages/AddEmployee';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<EmployeeListPage />} />
          <Route path="employee/:id" element={<EmployeeDetailsPage />} />
          <Route path="add-employee" element={<AddEmployee />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
