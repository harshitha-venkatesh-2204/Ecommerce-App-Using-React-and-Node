import React, { useState, useEffect } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the Node.js server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const cardItem = (item) => {
    return (
      <div key={item.ProductID} className="col-md-4">
        <div className="card my-9" style={{ width: "20rem" }}>
          <img
            src={item.ImageURL}
            className="card-img-top"
            alt={item.ProductName}
            style={{ objectFit: 'cover', height: '200px' }}
          />
          <div className="card-body" style={{ height: '200px' }}>
            <h5 className="card-title">{item.ProductName}</h5><br/>
            <p className="lead">${item.Price}</p>
            <NavLink to={`/products/${item.ProductID}`} className="btn btn-primary">
              Buy Now
            </NavLink>{" "}
          </div>
        </div>
      </div>
    );
  };
  
  

  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Handbags</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => cardItem(product))}
        </div>
      </div>
    </div>
  );
};

export default Products;
