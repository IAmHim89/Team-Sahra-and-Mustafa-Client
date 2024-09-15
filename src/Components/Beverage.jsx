import React from "react";
import "./Css_files/Beverage.css";
import beerImg from "../assets/images/Beer.jpg";
import liquorImg from "../assets/images/Liquor.jpg";
import mixedImg from "../assets/images/Mixed.jpg";

const Beverage = () => {
  return (
    <div className="beverage_flex">
      <h1>Beverages</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi et
        voluptates illum praesentium dolore assumenda. Dolores velit odit
        exercitationem laborum incidunt error ipsum provident earum officiis
        nesciunt esse maiores fugiat necessitatibus et, dignissimos commodi quis
        doloremque accusantium recusandae ea, aut hic ullam. Quos nisi ut magnam
        assumenda! Minus reiciendis modi sequi deleniti aspernatur eos
        architecto iusto voluptatem iste earum reprehenderit veniam magni rerum
        blanditiis, quod a fugiat placeat quas illo quaerat quisquam, autem
        beatae laudantium! Iure voluptates odio illo non asperiores accusantium,
        tempora ipsa voluptatum provident reiciendis quis, sit delectus nesciunt
        consequatur. Consequuntur aut obcaecati sapiente corporis provident modi
        quibusdam.
      </p>

      <div className="img_flex">
        <img src={beerImg} />
        <img src={liquorImg} />
        <img src={mixedImg} />
      </div>
    </div>
  );
};

export default Beverage;
