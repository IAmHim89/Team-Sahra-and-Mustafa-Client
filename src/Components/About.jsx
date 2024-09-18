import React from "react";
import restaurantImg from "../assets/images/Restaurant.jpg";
import barImg from "../assets/images/Bar.jpg";
import "./Css_files/About.css";

const About = () => {
  return (
    <div>
      <div className="about_container">
        <div className="aboutUs">
          <h1>About Us</h1>
          <p>
            Welcome to our family restaurant in beautiful Canyon City Texas!
          </p>
        </div>
        <div className="images">
          <img src={restaurantImg} alt="Image" />
          <img src={barImg} alt="Image" />
        </div>
      </div>
      <div className="bottom_border"></div>
    </div>
  );
};

export default About;
