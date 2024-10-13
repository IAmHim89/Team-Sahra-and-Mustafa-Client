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
    <div className="beverage_flex">
      <h1>Beverages</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At maiores
        ipsum aliquid corrupti nostrum vitae iure reprehenderit. Similique
        assumenda voluptatem voluptate iusto exercitationem doloremque quasi
        quibusdam quam mollitia nostrum nisi nemo expedita animi officiis,
        asperiores, dicta soluta temporibus illum molestias laudantium ratione
        tempore! Ipsum quisquam similique beatae exercitationem fugit non
        excepturi neque animi porro eos perferendis reprehenderit iusto, esse,
        quam assumenda facilis culpa eveniet repellendus omnis vitae nostrum
        fugiat nisi. Sit omnis rem accusamus excepturi earum veritatis quibusdam
        in quasi sint architecto modi aperiam dignissimos dolore voluptatem
        deserunt fugit, tempore, eius impedit sapiente assumenda necessitatibus!
        Similique pariatur laborum magni nulla?
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
