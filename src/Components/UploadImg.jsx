import React from "react";
import { useState, useEffect } from "react";

const UploadImg = () => {
  const [image, setImage] = useState("");
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    imgDownload();
  }, []);

  function turnToBase64(e) {
    setImage(e.target.files[0]);
  }

  const imgUpload = async (e) => {
    try {
      console.log("test");
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", "header-Img1");
      const response = await fetch("http://localhost:3001/image/uploadImg", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("myToken"),
        },
        body: formData,
      });
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  const imgDownload = async () => {
    try {
      const response = await fetch("http://localhost:3001/image/all", {
        method: "GET",
        headers: {},
      });
      const json = await response.json();
      console.log(json);
      setAllImages(json.allImages);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {allImages.map((image) => {
        console.log(image);
        const dataUrl = `data:${image.myFile.mimetype};base64,${image.myFile.buffer}`;
        return (
          <>
            <img src={dataUrl} />
          </>
        );
      })}
      <div>
        Lets Upload Image
        <form onSubmit={imgUpload}>
          <input name="name" type="text" placeholder="name" />
          <input
            name="image"
            accept="image/*"
            type="file"
            onChange={turnToBase64}
          />

          {image == "" || image == null ? (
            ""
          ) : (
            <img width={100} height={100} src={image} />
          )}
          <button>Upload Image</button>
        </form>
      </div>
    </div>
  );
};

export default UploadImg;
