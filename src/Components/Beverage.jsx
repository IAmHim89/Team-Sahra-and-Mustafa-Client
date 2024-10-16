import { useState, useEffect } from "react";
import "./Css_files/Beverage.css";
import beerImg from "../assets/images/Beer.jpg";
import liquorImg from "../assets/images/Liquor.jpg";
import mixedImg from "../assets/images/Mixed.jpg";

const Beverage = ({ allImages }) => {
  const [beverageImg, setBeverageImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (allImages.length > 0) {
      setBeverageImg(allImages.filter((img) => img.name === "beverage-Img")[0]);
      console.log(allImages);
    }
  }, [allImages]);
  useEffect(() => {
    if (beverageImg) {
      setImgUrl(
        `data:${beverageImg.myFile.mimetype};base64,${beverageImg.myFile.buffer}`
      );
    }
  }, [beverageImg]);
  return (
    <div className="beverage_flex beverage_container">
      <h1>Beverages and Dessert</h1>

      <p>
        Have a tall glass of beer with your burger. Canyon City Grill also sells
        beer and wine. After your meal, you try a strawberry shake to wash it
        down!
      </p>

      <div className="img_flex">
        <img src={imgUrl} />
        {/*  <img src={liquorImg} />
        <img src={mixedImg} /> */}
      </div>
    </div>
  );
};

export default Beverage;
