import React from 'react';
import { Link } from 'react-router-dom';
import { UseAuthContext } from '../Hooks/useAuthContext';
import { UseLogout } from '../Hooks/useLogout';
import './navbar.css'; // Import your custom CSS file

const Navbar = () => {
  const { logout } = UseLogout();
  const handl_logout = () => {
    logout();
  };
  const { user } = UseAuthContext();
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Meskel Wallet
          </Link>
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
            <ul className="navbar-nav ml-auto">
              {user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/Dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <Link className="btn btn-light mr-2" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {user && (
                <li className="nav-item ml-auto">
                  <button
                    className="btn btn-light"
                    onClick={handl_logout}
                  >
                    Log out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
