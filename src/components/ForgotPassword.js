import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./ForgotPasswordValidation";

function ForgotPassword() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
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
        const response = await fetch('http://localhost:3001/forgotPassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          navigate("/customer");
        } else {
          const data = await response.json();
          console.error('Password change failed:', data.error);
        }
      } catch (error) {
        console.error('Error during reset:', error.message);
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
            <p className="login-box-msg">Change Password</p>
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
                    Reset
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

export default ForgotPassword;
