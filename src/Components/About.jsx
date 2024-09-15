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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            id quam fugiat cum? Amet asperiores possimus error praesentium
            laborum rem quibusdam quod suscipit tenetur expedita dicta
            excepturi, cum cumque mollitia obcaecati quasi impedit! Dolorem qui
            sequi quisquam ad laudantium, perferendis culpa? Repudiandae
            reprehenderit molestias numquam. Assumenda quidem laudantium
            exercitationem animi voluptates, deserunt ipsum nisi cupiditate
            voluptatem dolores. Officia minus cum libero perspiciatis est porro
            quasi dicta suscipit sint, in fugiat enim, qui debitis numquam
            assumenda earum magni iusto unde. Quos sunt ad magni, ducimus
            distinctio ab, quo accusantium porro qui soluta nulla saepe
            laudantium velit ratione molestias rerum eum totam.
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
