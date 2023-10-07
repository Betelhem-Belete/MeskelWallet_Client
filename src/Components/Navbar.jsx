// import React from 'react';
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
      <div className="d-flex justify-content-between bg-secondary text-light p-2 w-100">
        <div>
          <h2>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginLeft: '5rem',
              }}
            >
              Meskel Wallet
            </Link>
          </h2>
        </div>
        <div className="btns">
          {user && (
            <Link to="/Dashboard" className="btn btn-secondary btn-sm mb-2">
              Dashboard
            </Link>
          )}

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
