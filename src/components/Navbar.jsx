
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand mx-3" to="/">BMI Calculator</Link>
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
          <li className="nav-item active">
            <Link className="nav-link" to="/poids">Poids Idéal</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/livres">Livres</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/covid">Covid</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
