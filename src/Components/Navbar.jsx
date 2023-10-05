import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center bg-secondary text-light p-2 w-100 ">
      <h2><i className="bi bi-bank"></i> Meskel Wallet</h2>
    </div>
    <div>
    <Link to="/Dashboard" className="btn btn-secondary btn-sm mb-2">Dashboard</Link>
  </div>
  )
};

export default Navbar;
