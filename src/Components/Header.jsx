import { useState, useEffect } from "react";

import "../Components/Css_files/Header.css";
const Header = ({ allImages }) => {
  const [headerimg, setHeaderImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    if (allImages.length > 0) {
      setHeaderImg(allImages.filter((img) => img.name === "header-Img1")[0]);
      console.log(allImages);
    }
  }, [allImages]);
  useEffect(() => {
    if (headerimg) {
      setImgUrl(
        `data:${headerimg.myFile.mimetype};base64,${headerimg.myFile.buffer}`
      );
    }
  }, [headerimg]);
  return (
    <div>
      <div className="header_container">
        <p>The Canyon City Grill</p>
        <img src={imgUrl} />
        {/* <h1>Hours of & Operation</h1>
        <h2>Monday-Saturday 11am-8pm</h2>
        <h2>Sunday 11am-6pm</h2> */}
      </div>
    </div>
  );
};

export default Header;
