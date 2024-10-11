import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Employe from './pages/Employe';
import InputPage from './pages/InputPage'; // Hypothetical component for the old inputSlice functionality
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">MyApp</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/employees">Employees</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/input-page">Input Page</Link> {/* Old inputSlice feature */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<h1>Welcome to MyApp</h1>} />
          <Route path="/employees" element={<Employe />} />
          <Route path="/input-page" element={<InputPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
