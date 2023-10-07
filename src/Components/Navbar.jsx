import React from 'react';
import { Link } from 'react-router-dom';
import { UseAuthContext } from '../Hooks/useAuthContext';
import { UseLogout } from '../Hooks/useLogout';

const Navbar = () => {
  const { logout } = UseLogout();
  const handl_logout = () => {
    logout();
  };
  const { user } = UseAuthContext();

  return (
    <div>
      <div className="d-flex justify-content-center bg-secondary text-light p-2 w-100 ">
        <h2>
          <Link to="/">
            <i className="btn bi bi-bank"></i>Meskel Wallet
          </Link>
        </h2>
        <div className="btns">
          {user && (
            <Link to="/Dashboard" className="btn btn-secondary btn-sm mb-2">
              Dashboard
            </Link>
          )}
        </div>
        <div className="btns">
          {!user && (
            <Link to="/login">
              <button className="btn btn-light ms-3">Login</button>
            </Link>
          )}
          {user && (
            <Link to="/">
              <button className="btn btn-light ms-3" onClick={handl_logout}>
                Log out
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
