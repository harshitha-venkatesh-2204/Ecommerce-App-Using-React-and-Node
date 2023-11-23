import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>About us</h1>
            <p className="lead">
              <strong>Our Values: Style That Empowers</strong><br/>
              At A4, we believe in the power of style to empower individuals.
              Our handbags are designed not just to complement your outfit 
              but to enhance your confidence and express your unique personality.<br/>
              <strong>Sustainability at Heart</strong><br/>
              We are committed to sustainability. From ethically sourced materials to
              eco-friendly packaging, we strive to minimize our environmental
              footprint. Our goal is to create handbags that not only make you
              look good but also feel good about your choices.<br/>
              <strong>Customization and Personalization</strong><br/>
              We understand that individuality is key.That's why we offer customization options,
              allowing you to create a handbag that is uniquely yours. Express your style 
              with A4.<br/><strong> Join Us on the Journey!</strong>
            </p>
          </div>
          <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + '/dist/img/Bag4.png'} alt="About us" height ="600px" width="600px"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
