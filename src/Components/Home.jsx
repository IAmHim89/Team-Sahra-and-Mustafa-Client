import React from "react";
import { Carousel, Button } from "react-daisyui";
import bbqImg from "../assets/images/BBQ.jpg";
import burgerImg from "../assets/images/Bfries.jpg";
import chickenImg from "../assets/images/ChickenWings.jpg";
import cheeseSteakImg from "../assets/images/Phillycheese.jpg";
import "../Components/Css_files/Home.css";
import About from "./About";
import Beverage from "./Beverage";
//this is a comment
const Home = () => {
  return (
    <div>
      <div className="carousel_container">
        <Carousel
          style={{
            width: "90%",
            height: "30em",
            marginBottom: "2em",
            marginTop: "3em",
          }}
          display="sequential"
          className="rounded-box"
        >
          <Carousel.Item src={bbqImg} alt="City" />
          <Carousel.Item src={burgerImg} alt="City" />
          <Carousel.Item src={chickenImg} alt="City" />
          <Carousel.Item src={cheeseSteakImg} alt="City" />
        </Carousel>
      </div>
      <div className="button_container">
        <Button color="accent">Order Online</Button>
      </div>
      <div className="spacing_line"></div>
      <About />
      <Beverage />
    </div>
  );
};

export default Home;
