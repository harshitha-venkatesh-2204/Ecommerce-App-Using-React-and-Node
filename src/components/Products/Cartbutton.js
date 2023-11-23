import React from "react";
import { NavLink } from "react-router-dom";

const Cartbutton = () => {
  return (
    <div>
      <NavLink to='/cart' className="btn btn-success ms-2">
        <span className="fa fa-shopping-cart me-2"> Cart( )</span>
      </NavLink>
    </div>
  );
};

export default Cartbutton;
