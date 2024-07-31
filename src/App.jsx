import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="container">
      <header>
        <h1>Employee Management System</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link> | <Link to="/add-employee">Add Employee</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
