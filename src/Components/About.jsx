import React, { useState, useEffect } from "react";

import restaurantImg from "../assets/images/Restaurant.jpg";
import barImg from "../assets/images/Bar.jpg";
import "./Css_files/About.css";

const About = ({ allImages }) => {
  const [aboutImg, setAboutImg] = useState("");
  const [aboutImg2, setAboutImg2] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    // console.log(allImages);
    if (allImages?.length > 0) {
      setAboutImg(allImages?.filter((img) => img.name === "aboutUs-Img1")[0]);
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
        <h1>About Us</h1>
        <div className="aboutUs">
          <p>
            Welcome to the family restaurant in beautiful Canyon City Texas!
            <section>
              Open seven days a week, come check out our family friendly
              restaurant for a home-cooked meal. Our menu offers sandwiches,
              salads, burgers, and various drinks.
            </section>
          </p>
        </div>
        <div className="images">
          <img
            src={`data:${aboutImg?.myFile?.mimetype};base64,${aboutImg?.myFile?.buffer}`}
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

// const [imgUrl2, setImgUrl2] = useState("");
// setAboutImg2(allImages?.filter((img) => img.name === "aboutUs-Img2")[0]);
{
  /* <img
  src={`data:${aboutImg2?.myFile?.mimetype};base64,${aboutImg2?.myFile?.buffer}`}
  alt="Image"
  className="aboutus_img"
/> */
}
