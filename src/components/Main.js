import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeDashboard from "./Employee/EmployeeDashboard";
import EmployeeLogin from "./Employee/EmployeeLogin/EmployeeLogin";
import CustomerLogin from "./Customers/CustomerLoginAndRegistration/CustomerLogin";
import CustomerDashboard from "./Customers/CustomerDashboard";
import CustomerRegistration from "./Customers/CustomerLoginAndRegistration/CustomerRegistration";
import ForgotPassword from "./ForgotPassword";
import HomePage from "./HomePage";
import Home from "./Products/Home";
import About from "./Products/About";
import Contact from "./Products/Contact";
import Products from "./Products/Products";
import ProductDetail from "./Products/ProductDetail";
import CartPage from "./Products/CartPage";
import Checkout from "./Products/Checkout";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}></Route>
          <Route path="/employee" element={<EmployeeLogin />}></Route>
          <Route path="/customer" element={<CustomerLogin />}></Route>
          <Route path="/customerRegister" element={<CustomerRegistration/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route
            path="/products/:id"  // Use a dynamic parameter
            element={<ProductDetail />}
          />
          <Route
            path="/employeeDashboard"
            element={<EmployeeDashboard />}
          ></Route>
          <Route
            path="/customerDashboard"
            element={<CustomerDashboard />}
          ></Route>
          <Route
            path="/forgotPassword"
            element={<ForgotPassword/>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
