import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3030/people')
      .then((result) => setPeople(result.data))
      .catch((err) => console.log(err));
  },[]);

  const handleDelete = (id) => {
    const confirm = window.confirm('Do you want to delete?');
    if (confirm) {
      axios
        .delete('http://localhost:3030/people/' + id)
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
                  <th>January</th>
                  <th>February</th>
                  <th>March</th>
                  <th>April</th>
                  <th>May</th>
                  <th>June</th>
                  <th>July</th>
                  <th>August</th>
                  <th>September</th>
                  <th>October</th>
                  <th>November</th>
                  <th>December</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person) => (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.gender}</td>
                    <td>{person.mobile}</td>
                    <td>{person.january}</td>
                    <td>{person.february}</td>
                    <td>{person.march}</td>
                    <td>{person.april}</td>
                    <td>{person.may}</td>
                    <td>{person.june}</td>
                    <td>{person.july}</td>
                    <td>{person.august}</td>
                    <td>{person.september}</td>
                    <td>{person.october}</td>
                    <td>{person.november}</td>
                    <td>{person.december}</td>
                    <td>
                      <div className="d-flex justify-content-between align-items-center">
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
                      </div>
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
