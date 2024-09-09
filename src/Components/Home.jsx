import React from "react";
import { Carousel } from "react-daisyui";
import BurgerImg from "../assets/images/Burgers.jpg";
const Home = () => {
  return (
    <div>
      <h1>The Canyon City Grill</h1>
      <h2>Hours of Operation</h2>
      <div>
        <section>
          <Carousel className="rounded-box" display="sequential">
            <Carousel.Item
              src={BurgerImg}
              alt="City"
              width="50px"
              height="50px"
            />
            <Carousel.Item
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              alt="City"
            />
            <Carousel.Item
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              alt="City"
            />
            <Carousel.Item
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              alt="City"
            />
          </Carousel>
          <button>Menu</button>
        </section>
      </div>
    </div>
  );
};

export default Home;
