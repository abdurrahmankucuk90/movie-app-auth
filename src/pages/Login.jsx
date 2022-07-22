import React, { useState } from 'react';
import { signIn, signUpProvider } from '../auth/firebase';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate)
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block ">
        <img src={'https://picsum.photos/800/800'} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3 ">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
        </form>
        <button className="btn form-control btn-primary" onClick={()=> signUpProvider(navigate)} >Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;