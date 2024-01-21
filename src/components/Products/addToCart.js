import React from "react";

const addToCart = ({ cart, updateCart, resetCart }) => {
  return (
    <div className="container my-5 py-3">
      <h2 className="text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    {item.name} - ${item.price} - Quantity: {item.quantity}
                  </div>
                  <div>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => updateCart(item.id, "increase")}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => updateCart(item.id, "decrease")}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => updateCart(item.id, "remove")}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-end">
            <button
              className="btn btn-danger"
              onClick={resetCart}
            >
              Reset Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default addToCart;
