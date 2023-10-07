// import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [people, setPeople] = useState({
    id: uuid(),
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

  const navigate = useNavigate();

  const handleInput = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };
  //when press submit button to post the data to the form
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/add/')
      .then((result) => {
        alert('Person added sucessfully');
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
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile: </label>
            <input
              type="number"
              name="mobile"
              className="form-control"
              placeholder="Enter Mobile Number"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="january">Money in January: </label>
            <input
              type="number"
              name="january"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="february">Money in February: </label>
            <input
              type="number"
              name="february"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="march">Money in March: </label>
            <input
              type="number"
              name="march"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="aril">Money in April: </label>
            <input
              type="number"
              name="april"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="june">Money in June: </label>
            <input
              type="number"
              name="june"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="july">Money in July: </label>
            <input
              type="number"
              name="july"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="augest">Money in August: </label>
            <input
              type="number"
              name="augest"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="september">Money in September: </label>
            <input
              type="number"
              name="september"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="october">Money in October: </label>
            <input
              type="number"
              name="october"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="november">Money in November:: </label>
            <input
              type="number"
              name="november"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="december">Money in December: </label>
            <input
              type="number"
              name="december"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <button className="btn btn-info mt-1">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
