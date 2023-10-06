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
  });

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
    <div>
      <div className="justify-content-center d-flex align-items-center mt-5">
        <div className="w-75">
          <table className="table text-center">
            <thead className="table-success">
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>January</th>
                <th>February</th>
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
              {people.map((person) => {
                return (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.gender}</td>
                    <td>{person.january}</td>
                    <td>{person.february}</td>
                    <td>{person.march}</td>
                    <td>{person.april}</td>
                    <td>{person.may}</td>
                    <td>{person.june}</td>
                    <td>{person.july}</td>
                    <td>{person.augest}</td>
                    <td>{person.september}</td>
                    <td>{person.october}</td>
                    <td>{person.november}</td>
                    <td>{person.december}</td>
                    <td>
                      <Link
                        to={`/edit/${person.id}`}
                        className="btn btn-success me-2n btn-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(person.id)}
                        className="btn btn-danger me-2n btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
