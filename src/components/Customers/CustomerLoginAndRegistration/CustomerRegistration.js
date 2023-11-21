import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";

function CustomerRegister() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Check if there are no errors before making the request
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make a POST request to your Node.js server
        const response = await fetch('http://localhost:3001/customerRegister', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // Registration successful, you can redirect to the customer dashboard
          navigate("/customerDashboard");
        } else {
          // Registration failed, handle the error
          const data = await response.json();
          console.error('Registration failed:', data.error);
        }
      } catch (error) {
        console.error('Error during registration:', error.message);
      }
    }
  };

  return (
    <div className="lockscreen-wrapper">
      <div className="login-box">
        <div className="card">
          <div className="card-header text-center">
            <h1>
              <b>A</b>4
            </h1>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <input
                  type="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  name="fullName"
                  onChange={handleInput}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              {errors.fullName && (
                <span className="text-danger">{errors.fullName}</span>
              )}
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
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
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
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
              <div className="input-group mb-3">
                <input
                  type="Password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleInput}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              {errors.confirmPassword && (
                <span className="text-danger">{errors.confirmPassword}</span>
              )}
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
            <div className="social-auth-links text-center mt-2 mb-3">
              <a
                href="https://www.facebook.com/"
                className="btn btn-block btn-primary"
              >
                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
              </a>
            </div>
            <Link to="/forgotPassword" className="mb-1">
              I forgot my password
            </Link>
            <p className="mb-0">
              <a href="/customerRegister" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegister;
