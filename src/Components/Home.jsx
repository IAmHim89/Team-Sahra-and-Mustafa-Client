import React from "react";
import { Carousel, Button } from "react-daisyui";
const Home = () => {
  return (
    <div>
      <div>
        <section>
          <Carousel className="rounded-box" display="sequential">
            <Carousel.Item
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              alt="City"
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
          <div>
            <Button responsive={true} color="primary">
              Menu
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
