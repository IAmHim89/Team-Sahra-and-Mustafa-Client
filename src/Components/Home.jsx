import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Button } from "react-daisyui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

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

      <div className="carousel_container container_background">
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
          <Button color="accent">
            <a
              href="https://www.toasttab.com/canyon-city-grill2-14601-fm-306"
              target="_blank"
            >
              Order Online
            </a>
          </Button>
        </div>
      </div>
      <div className="spacing_line"></div>
      <About allImages={allImages} />
      <Beverage allImages={allImages} />
      <button className="button_container">
        <p>Please contact us if you have any questions or large orders.</p>
      </button>

      <footer>
        <div className="footer_container">
          <div>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
          <div>
            <Link to="https://www.instagram.com/explore/locations/252682088449202/canyon-city-grill/">
              <FontAwesomeIcon
                icon={faSquareInstagram}
                size="2xl"
                style={{
                  color: "aqua",
                  position: "absolute",
                  bottom: "",
                  left: "48%",
                }}
              />
            </Link>

            <Link to="https://www.facebook.com/canyoncitygrill/">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2xl"
                style={{
                  color: "#065df4",
                  position: "absolute",
                  left: "50%",
                }}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
