import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UseAuthContext } from "../Hooks/useAuthContext";

const Home = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();
  const { user } = UseAuthContext();

  useEffect(() => {
    axios
      .get('http://localhost:3030/')
      .then((result) => setPeople(result.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("from HOme", people)
  ////////
  const handleDelete = (id) => {
    const confirm = window.confirm('Do you want to delete?');
    if (confirm) {
      axios
        .delete('http://localhost:3030/delete/' + id)
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
                  <th>Tikmt</th>
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
              <tbody>
                {people.map((person) => (
                  <tr key={person._id}>
                    <td>{person.name ? person.name : '--'}</td>
                    <td>{person.gender ? person.gender : '--'}</td>
                    <td>{person.mobile ? person.mobile : '--'}</td>
                    <td>{person.Tikmt ? person.Tikmt : '--'}</td>
                    <td>{person.Hidar ? person.Hidar : '--'}</td>
                    <td>{person.Tahisas ? person.Tahisas : '--'}</td>
                    <td>{person.Tir ? person.Tir : '--'}</td>
                    <td>{person.Yekatit ? person.Yekatit : '--'}</td>
                    <td>{person.Megabit ? person.Megabit : '--'}</td>
                    <td>{person.Miyaziya ? person.Miyaziya : '--'}</td>
                    <td>{person.Ginbot ? person.Ginbot : '--'}</td>
                    <td>{person.Sene ? person.Sene : '--'}</td>
                    <td>{person.Hamle ? person.Hamle : '--'}</td>
                    <td>{person.Nehase ? person.Nehase : '--'}</td>
                    <td>{person.Meskerm ? person.Meskerm : '--'}</td>

                    <td>
                      {user && <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={`/edit/${person._id}`}
                          className="btn btn-success btn-sm"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(person._id)}
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
