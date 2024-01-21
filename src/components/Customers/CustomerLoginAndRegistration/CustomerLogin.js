import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Validation2 from "./LoginValidation2";



function CustomerLogin() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation2(values);
    setErrors(validationErrors);

    // Check if there are no errors before redirecting
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make a POST request to your Node.js server
        const response = await fetch('http://localhost:3001/customerLogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          navigate("/customerDashboard");
        } else {
          const data = await response.json();
          console.error('Login failed:', data.error);
        }
      } catch (error) {
        console.error('Error during login:', error.message);
      }
    }
  };

  return (
    <div className="lockscreen-wrapper">
      <div className="login-box">
        <div className="card">
          <div className="card-header text-center">
              <h1><b>A4</b>-Customer</h1>
            </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type=""
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleInput}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              {errors.email && <span className="text-danger">{errors.email}</span>}
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              {errors.password && <span className="text-danger">{errors.password}</span>}
              <div className="row">
                <div className="col-8">
                  <Link to="/forgotPassword"className="nav-link">I forgot my password</Link>
                </div>
              </div>
              <p className="mb-0">
                <NavLink to="/customerRegister"className="nav-link">Register a new membership</NavLink>
            </p>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
