import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Have some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src={process.env.PUBLIC_URL + "/dist/img/img9.jpeg"}
              alt="About us"
              height="400px"
              width="400px"
            ></img>
          </div>
          <div className="col-md-6">
            <form>
              <div>
              <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Full Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Type your Query
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
            </form>
             <button type="submit" className="btn btn-primary btn-block">
                    Send
                  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
