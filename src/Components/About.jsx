import React, { useState, useEffect } from "react";

import restaurantImg from "../assets/images/Restaurant.jpg";
import barImg from "../assets/images/Bar.jpg";
import "./Css_files/About.css";

const About = ({ allImages }) => {
  const [aboutImg, setAboutImg] = useState("");
  const [aboutImg2, setAboutImg2] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");

  useEffect(() => {
    // console.log(allImages);
    if (allImages?.length > 0) {
      setAboutImg(allImages?.filter((img) => img.name === "aboutUs-Img1")[0]);
      setAboutImg2(allImages?.filter((img) => img.name === "aboutUs-Img2")[0]);
      console.log(allImages);
    }
  }, [allImages]);
  useEffect(() => {
    // if (aboutImg) {
    //   setImgUrl(
    //     `data:${aboutImg.myFile.mimetype};base64,${aboutImg.myFile.buffer}`
    //   );
    // } else if (aboutImg2) {
    //   setImgUrl2(
    //     `data:${aboutImg2.myFile.mimetype};base64,${aboutImg2.myFile.buffer}`
    //   );
    // }
    // console.log("line 30 ", aboutImg, aboutImg2);
  }, [aboutImg]);
  return (
    <div>
      <div className="about_container">
        <div className="aboutUs">
          <h1>About Us</h1>
          <p>
            Welcome to our family restaurant in beautiful Canyon City Texas!
          </p>
        </div>
        <div className="images">
          <img
            src={`data:${aboutImg?.myFile?.mimetype};base64,${aboutImg?.myFile?.buffer}`}
            alt="Image"
            className="aboutus_img"
          />
          <img
            src={`data:${aboutImg2?.myFile?.mimetype};base64,${aboutImg2?.myFile?.buffer}`}
            alt="Image"
            className="aboutus_img"
          />
        </div>
      </div>
      <div className="bottom_border"></div>
    </div>
  );
};

export default About;
