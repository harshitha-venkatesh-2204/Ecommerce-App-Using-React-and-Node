import React from "react";
import { Link } from "react-router-dom";
import CustomerLogin from "./Customers/CustomerLoginAndRegistration/CustomerLogin";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-12">
            <div className="col-12">
              <h1>Select User Type</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/dist/img/img9.jpeg"}
              alt="About us"
              height="400px"
              width="400px"
            ></img>
            <br /><br />
            <Link to='/employee'>
              <div className="col-4">
                <button type="submit" className="btn btn-primary">
                  Employee
                </button>
              </div>
            </Link>
          </div>
          <br />
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/dist/img/img9.jpeg"}
              alt="About us"
              height="400px"
              width="400px"
            ></img>
            <br /> <br />
            <Link to='/customer'>
              <div className="col-4">
                <button type="submit" className="btn btn-primary">
                  Customer
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
