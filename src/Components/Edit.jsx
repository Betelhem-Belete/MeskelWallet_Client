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

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    Gender: '',
    monthlyPayments: {
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
    },
  });

  //get/fetch the data or record
  useEffect(() => {
    axios
      .get('http://localhost:8000/' + id)
      .then((result) => setPeople(result.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  //then to update the data
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  ///////
  const handleMonthlyPaymentsInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      monthlyPayments: {
        ...prevData.monthlyPayments,
        [name]: value,
      },
    }));
  };
  //////
  console.log(formData)
  ///////////
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/edit/${id}`, formData)
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
              defaultValue={people ? people.name:''}
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
              defaultValue={people ? people.Gender: ''}
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
              defaultValue={people ? people.mobile:''}
            />
          </div>
          <div>
            <label htmlFor="january">Tikmt: </label>
            <input
              type="number"
              name="Tikmt"
              className="form-control"
              placeholder="Enter money in january"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Tikmt : ''}
            />
          </div>
          <div>
            <label htmlFor="mobile">Hidar: </label>
            <input
              type="number"
              name="Hidar"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Hidar : ''}
              />
          </div>
          <div>
            <label htmlFor="march">Tahisas: </label>
            <input
              type="number"
              name="Tahisas"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Tahisas : ''}
        
            />
          </div>
          <div>
            <label htmlFor="Tir">Tir: </label>
            <input
              type="number"
              name="Tir"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.Tir}
            />
          </div>
          <div>
            <label htmlFor="Yekatit">Yekatit: </label>
            <input
              type="number"
              name="Yekatit"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Yekatit : ''}
              />
          </div>
          <div>
            <label htmlFor="Megabit">Megabit: </label>
            <input
              type="number"
              name="Megabit"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Megabit : ''}
            />
          </div>
          <div>
            <label htmlFor="Miyaziya">Miyaziya: </label>
            <input
              type="number"
              name="july"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Miyaziya : ''}
            />
          </div>
          <div>
            <label htmlFor="Ginbot">Ginbot: </label>
            <input
              type="number"
              name="Ginbot"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Ginbot : ''}
            />
          </div>
          <div>
            <label htmlFor="september">Sene: </label>
            <input
              type="number"
              name="Sene"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Sene : ''}
            />
          </div>
          <div>
            <label htmlFor="Hamle">Hamle: </label>
            <input
              type="number"
              name="october"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Hamle : ''}
            />
          </div>
          <div>
            <label htmlFor="Nehase">Nehase: </label>
            <input
              type="number"
              name="Nehase"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Nehase : ''}
            />
          </div>
          <div>
            <label htmlFor="Meskerm">Meskerm: </label>
            <input
              type="number"
              name="Meskerm"
              className="form-control"
              placeholder="Enter money"
              onChange={(e) => { handleMonthlyPaymentsInput(e) }}
              defaultValue={people.monthlyPayments ? people.monthlyPayments.Meskerm : ''}
            />
          </div>
          <button className="btn btn-info mt-1">Edit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
