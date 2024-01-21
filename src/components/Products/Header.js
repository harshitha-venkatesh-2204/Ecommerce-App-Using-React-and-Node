import React from "react";
import { NavLink } from "react-router-dom";
import Cartbutton from "./Cartbutton";
import Products from "./Products";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item font-weight-bold">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
            <div
              className="navbar-brand font-weight-bold"
              style={{ marginRight: "250px"}}
            >
              A<strong>4</strong>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          &nbsp;&nbsp;
          <Cartbutton />
        </div>
      </nav>
    </div>
  );
};

export default Header;
