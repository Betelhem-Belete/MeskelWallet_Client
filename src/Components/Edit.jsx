import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { id } = useParams(); //take id from url

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

  //get/fetch the data or record
  useEffect(() => {
    axios
      .get('http://localhost:8000/' + id)
      .then((result) => setPeople(result.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };
  //then to update the data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:8000/edit/' + id, people)
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
              value={people.name}
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
              value={people.gender}
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
              value={people.mobile}
            />
          </div>
          <div>
            <label htmlFor="Tikmt">Tikmt: </label>
            <input
              type="number"
              name="Tikmt"
              className="form-control"
              placeholder="Enter money in Tikmt"
              onChange={handleInput}
              value={people.Tikmt}
            />
          </div>
          <div>
            <label htmlFor="Hidar">Hidar: </label>
            <input
              type="number"
              name="Hidar"
              className="form-control"
              placeholder="Enter money Hidar"
              onChange={handleInput}
              value={people.Hidar}
            />
          </div>
          <div>
            <label htmlFor="Tahisas">Tahisas: </label>
            <input
              type="number"
              name="Tahisas"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Tahisas}
            />
          </div>
          <div>
            <label htmlFor="april">Tir: </label>
            <input
              type="number"
              name="Tir"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Tir}
            />
          </div>
          <div>
            <label htmlFor="Yekatit">Yekatit: </label>
            <input
              type="number"
              name="Yekatit"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Yekatit}
            />
          </div>
          <div>
            <label htmlFor="Megabit">Megabit: </label>
            <input
              type="number"
              name="Megabit"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Megabit}
            />
          </div>
          <div>
            <label htmlFor="Miyaziya">Miyaziya: </label>
            <input
              type="number"
              name="Miyaziya"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Miyaziya}
            />
          </div>
          <div>
            <label htmlFor="Ginbot">Ginbot: </label>
            <input
              type="number"
              name="Ginbot"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Ginbot}
            />
          </div>
          <div>
            <label htmlFor="Sene">Sene: </label>
            <input
              type="number"
              name="Sene"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Sene}
            />
          </div>
          <div>
            <label htmlFor="Hamle">Hamle: </label>
            <input
              type="number"
              name="Hamle"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Hamle}
            />
          </div>
          <div>
            <label htmlFor="Nehase">Nehase: </label>
            <input
              type="number"
              name="Nehase"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Nehase}
            />
          </div>
          <div>
            <label htmlFor="Meskerm">Meskerm: </label>
            <input
              type="number"
              name="Meskerm"
              className="form-control"
              placeholder="Enter money"
              onChange={handleInput}
              value={people.Meskerm}
            />
          </div>
          <button className="btn btn-info mt-1">Edit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
