import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { id } = useParams(); //take id from url

  const [people, setPeople] = useState({
    id: id,
    name: '',
    gender: '',
    mobile: '',
    january: '',
    february: '',
    march: '',
    april: '',
    may: '',
    june: '',
    july: '',
    augest: '',
    september: '',
    november: '',
    december: '',
  });

  //get/fetch the data or record
  useEffect(() => {
    axios
      .get('http://localhost:3030/people/' + id)
      .then((result) => setPeople(result.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setPeople({ ...person, [e.target.name]: e.target.value });
  };
  //then to update the data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:3030/people/' + id, person)
      .then((result) => {
        alert('Person Updated sucessfully');
        navigate('/');
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-50 border mt-5 rounded bg-secondary text-white p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              placeholder="Enter Name"
              onChange={handleInput}
              value={person.name}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender: </label>
            <input
              type="text"
              name="gender"
              className="form-control"
              required
              placeholder="Enter Gender"
              onChange={handleInput}
              value={user.gender}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile: </label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              placeholder="Enter mobile number"
              onChange={handleInput}
              value={user.mobile}
            />
          </div>
          <div>
            <label htmlFor="january">January: </label>
            <input
              type="number"
              name="january"
              className="form-control"
              placeholder="Enter money in january"
              onChange={handleInput}
              value={user.january}
            />
          </div>
          <div>
            <label htmlFor="mobile">February: </label>
            <input
              type="number"
              name="february"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.february}
            />
          </div>
          <div>
            <label htmlFor="march">March: </label>
            <input
              type="number"
              name="march"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.march}
            />
          </div>
          <div>
            <label htmlFor="april">April: </label>
            <input
              type="number"
              name="april"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.april}
            />
          </div>
          <div>
            <label htmlFor="may">May: </label>
            <input
              type="number"
              name="may"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.may}
            />
          </div>
          <div>
            <label htmlFor="june">June: </label>
            <input
              type="number"
              name="june"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.june}
            />
          </div>
          <div>
            <label htmlFor="july">July: </label>
            <input
              type="number"
              name="july"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.july}
            />
          </div>
          <div>
            <label htmlFor="augest">August: </label>
            <input
              type="number"
              name="augest"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.augest}
            />
          </div>
          <div>
            <label htmlFor="september">September: </label>
            <input
              type="number"
              name="september"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.september}
            />
          </div>
          <div>
            <label htmlFor="october">October: </label>
            <input
              type="number"
              name="october"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.october}
            />
          </div>
          <div>
            <label htmlFor="november">November: </label>
            <input
              type="number"
              name="november"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.november}
            />
          </div>
          <div>
            <label htmlFor="december">December: </label>
            <input
              type="number"
              name="december"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={user.december}
            />
          </div>
          <button className="btn btn-info mt-1">Edit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
