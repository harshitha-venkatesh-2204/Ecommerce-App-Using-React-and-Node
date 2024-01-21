import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Header from "./Header";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartButton, setCartButton] = useState("Add to Cart");

  useEffect(() => {
    // Fetch data for the specific product when the component mounts
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const addToCart = () => {
    const updatedCart = [
      ...cart,
      {
        id: product.id,
        name: product.ProductName,
        price: product.Price,
        quantity: 1,
      },
    ];
    setCart(updatedCart);
    setCartButton("Added to Cart");
  };

  const removeFromCart = () => {
    // Implement logic to remove item from cart based on product id
    // For simplicity, let's assume you have a unique id for each product
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setCartButton("Add to Cart");
  };

  const resetCart = () => {
    setCart([]);
    setCartButton("Add to Cart");
  };

  if (!product) {
    return (
      <div>
        <Header />
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Product Details</h1>
              <hr />
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-around-center mx-auto">
            <img
              src={product.ImageURL}
              alt={product.ProductName}
              className="img-fluid"
              style={{ objectFit: "cover", height: "400px" }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-around-center">
            <h1>{product.ProductName}</h1>
            <hr />
            <h2>${product.Price}</h2>
            <p>{product.Description}</p>
            <NavLink to="/cart" className="nav-link">
            <button className="btn btn-outline-success" onClick={addToCart}>
              {cartButton}
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
