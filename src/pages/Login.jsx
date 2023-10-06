import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from '../Hooks/useLogin';
// import { UseAuthContext } from "../hooks/useAuthContext";
// import { useValidator } from "../hooks/useValidator";
function Login() {
  // const { verifiy } = useValidator();

  // const { user } = UseAuthContext();
  const { isLoading, error, login } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  const handle_submit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    await login(email, password);
    // if (user) {
    //   verifiy();
    //   // navigate('/profile')
    // }
  };
  return (
    <React.Fragment>
      <div className="containers_login" onSubmit={handle_submit}>
        <form className="form">
          <p className="title">Login </p>
          <p className="message">Login now and get full access to our app. </p>
          <label>
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>

          <button className="submit" type="submit" disabled={isLoading}>
            Submit
          </button>
          {error && <div className="error">{error}</div>}
          <p className="signin">
            Don't have an acount ? <Link to="/signup">Signin</Link>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
