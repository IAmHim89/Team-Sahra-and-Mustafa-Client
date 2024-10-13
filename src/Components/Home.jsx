import React from "react";
import { Carousel, Button } from "react-daisyui";

import bbqImg from "../assets/images/BBQ.jpg";
import burgerImg from "../assets/images/Bfries.jpg";
import chickenImg from "../assets/images/ChickenWings.jpg";
import cheeseSteakImg from "../assets/images/Phillycheese.jpg";
import "../Components/Css_files/Home.css";
import About from "./About";
import Beverage from "./Beverage";
import Header from "./Header";
//this is a comment
const Home = ({ allImages }) => {
  const carouselArray = allImages.filter((i) =>
    i.name.toLowerCase().includes("carousel")
  );
  // const carouselArray = [bbqImg, burgerImg, chickenImg, cheeseSteakImg];
  console.log(carouselArray);
  return (
    <div>
      <Header allImages={allImages} />
      {/*  <div className="carouselHeader_container">
      </div> */}
      <div className="carousel_container">
        <h1>Burgers & More</h1>
        <Carousel
          style={{
            width: "50%",
            height: "30em",
            marginBottom: "2em",
            marginTop: "3em",
          }}
          display="sequential"
          className="rounded-box"
        >
          {carouselArray.map((image) => {
            const dataUrl = `data:${image.myFile.mimetype};base64,${image.myFile.buffer}`;

            return <Carousel.Item key={image._id} src={dataUrl} alt="City" />;
          })}
          {/* <Carousel.Item src={burgerImg} alt="City" />
          <Carousel.Item src={chickenImg} alt="City" />
          <Carousel.Item src={cheeseSteakImg} alt="City" /> */}
        </Carousel>
        <div className="button_container">
          <Button color="accent">Order Online</Button>
        </div>
      </div>
      <div className="spacing_line"></div>
      <About allImages={allImages} />
      <Beverage allImages={allImages} />
    </div>
  );
};

export default Home;
