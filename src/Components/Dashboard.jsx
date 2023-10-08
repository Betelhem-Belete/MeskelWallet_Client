import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [people, setPeople] = useState({
    name: '',
    gender: '',
    mobile: '',
    Tikmt: '',
    Hidar: '',
    Tahisas: '',
    Tir: '',
    Yekatit: '',
    Megabit: '',
    Miyaziya: '',
    Ginbot: '',
    Sene: '',
    Hamle: '',
    Nehase: '',
    Meskerm: '',
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };
  //when press submit button to post the data to the form
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/add', people)
      .then((result) => {
        alert('Person added sucessfully');
        navigate('/');
        console.log(result);
      })
      .catch((err) => console.log(err));
    console.log('from dashboard', people);
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
            <label htmlFor="Tikmt">Money in Tikmt: </label>
            <input
              type="number"
              name="Tikmt"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Hidar">Money in Hidar: </label>
            <input
              type="number"
              name="Hidar"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Tahisas">Money in Tahisas: </label>
            <input
              type="number"
              name="Tahisas"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Tir">Money in Tir: </label>
            <input
              type="number"
              name="Tir"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Yekatit">Money in Yekatit: </label>
            <input
              type="number"
              name="Yekatit"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Megabit">Money in Megabit: </label>
            <input
              type="number"
              name="Megabit"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Miyaziya">Money in Miyaziya: </label>
            <input
              type="number"
              name="Miyaziya"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Ginbot">Money in Ginbot: </label>
            <input
              type="number"
              name="Ginbot"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Sene">Money in Sene: </label>
            <input
              type="number"
              name="Sene"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Hamle">Money in Hamle:: </label>
            <input
              type="number"
              name="Hamle"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Nehase">Money in Nehase: </label>
            <input
              type="number"
              name="Nehase"
              className="form-control"
              placeholder="amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Meskerm">Money in Meskerm: </label>
            <input
              type="number"
              name="Meskerm"
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
