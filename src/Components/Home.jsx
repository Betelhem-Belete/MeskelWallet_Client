import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { UseAuthContext } from "../Hooks/useAuthContext";
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';

// const API = process.env.API;
const Home = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();
  const { user } = UseAuthContext();

  useEffect(() => {
    axios
      .get('http://localhost:8000/')
      .then((result) => setPeople(result.data))
      .catch((err) => console.log(err));
      console.log(people)
  },[]);

  const handleDelete = (id) => {
    const confirm = window.confirm('Do you want to delete?');
    if (confirm) {
      axios
        .delete('http://localhost:8000/delete/' + id)
        .then((result) => {
          alert('record deleted');
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  };
  return (
  
    <div style={{ height: '100vh' }}>
      <div className="mt-5">
        <div className="w-100">
          <div className="table-responsive">
            <table className="table text-center">
              <thead className="table-success sticky-header">
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                  <th>Tikimt</th>
                  <th>Hidar</th>
                  <th>Tahisas</th>
                  <th>Tir</th>
                  <th>Yekatit</th>
                  <th>Megabit</th>
                  <th>Miyaziya</th>
                  <th>Ginbot</th>
                  <th>Sene</th>
                  <th>Hamle</th>
                  <th>Nehase</th>
                  <th>Meskerm</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="scrollable-tbody">
                {people.map((person) => (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.Gender}</td>
                    <td>{person.mobile}</td>
                    <td>{person.monthlyPayments.Tikmt}</td>
                    <td>{person.monthlyPayments.Hidar}</td>
                    <td>{person.monthlyPayments.Tahisas}</td>
                    <td>{person.monthlyPayments.Tir}</td>
                    <td>{person.monthlyPayments.Yekatit}</td>
                    <td>{person.monthlyPayments.Megabit}</td>
                    <td>{person.monthlyPayments.Miyaziya}</td>
                    <td>{person.monthlyPayments.Ginbot}</td>
                    <td>{person.monthlyPayments.Hamle}</td>
                    <td>{person.monthlyPayments.Nehase}</td>
                    <td>{person.monthlyPayments.Meskerm}</td>
                    <td>
                     { user && <div className="action-buttons">
                        <Link
                          to={`/edit/${person.id}`}
                          className="btn btn-success btn-sm"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(person.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
  
  
  
};

export default Home;
