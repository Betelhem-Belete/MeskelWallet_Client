// import React from 'react';
// import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    Gender: '',
    Meskerem: '',
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
    // const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleMonthlyPaymentsInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     monthlyPayments: {
  //       ...prevData.monthlyPayments,
  //       [name]: value,
  //     },
  //   }));
  // };

  // console.log(formData)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/add', formData)
      .then((result) => {
        alert('Person added successfully');
        navigate('/');
        console.log(result);
      })
      .catch((err) => console.log(err.message));
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
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              required
              placeholder="Enter Mobile Number"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Gender">Gender: </label>
            <input
              type="text"
              name="Gender"
              className="form-control"
              required
              placeholder="Enter Gender"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Meskerm">Money in Meskerm: </label>
            <input
              type="number"
              name="Meskerm"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Tikmt">Money in Tikmt: </label>
            <input
              type="number"
              name="Tikmt"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Hidar">Money in Hidar: </label>
            <input
              type="number"
              name="Hidar"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Tahisas">Money in Tahisas: </label>
            <input
              type="number"
              name="Tahisas"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Tir">Money in Tir: </label>
            <input
              type="number"
              name="Tir"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Yekatit">Money in Yekatit: </label>
            <input
              type="number"
              name="Yekatit"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Megabit">Money in Megabit: </label>
            <input
              type="number"
              name="Megabit"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Miyaziya">Money in Miyaziya: </label>
            <input
              type="number"
              name="Miyaziya"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Ginbot">Money in Ginbot: </label>
            <input
              type="number"
              name="Ginbot"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Sene">Money in Sene: </label>
            <input
              type="number"
              name="Sene"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Hamle">Money in Hamle: </label>
            <input
              type="number"
              name="Hamle"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Nehase">Money in Nehase: </label>
            <input
              type="number"
              name="Nehase"
              className="form-control"
              placeholder="Amount of money"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="Meskerm">Money in Meskerm: </label>
            <input
              type="number"
              name="Meskerm"
              className="form-control"
              placeholder="Amount of money"
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
