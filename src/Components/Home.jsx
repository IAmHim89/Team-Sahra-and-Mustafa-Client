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
      {/*imbed map here */}
      <section className="my-10">
        <h2
          className="text-4xl font-bold text-center"
          style={{
            marginTop: "8em",
            display: "inline-block",
            borderBottom: "2px solid black",
            borderRadius: "2em",
            padding: ".5em 2em",
            boxShadow: " 2px 2px 2px black",
            color: " aqua",
            fontFamily: "Abril fatface",
            fontWeight: "bolder",
            textShadow: "5px 5px 5px aqua",
          }}
        >
          Find Us Here
        </h2>
        <div className="flex justify-center mt-6">
          <iframe
            className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 h-80"
            style={{ border: 0, width: "75vw", height: "20vh" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s14601+FM+306+Canyon+Lake,+TX+78133!5e0!6i12"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
