import React from "react";
import { useState } from "react";

const UploadImg = () => {
  const [image, setImage] = useState("");

  function turnToBase64(e) {
    console.log(e);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };

    reader.onerror = (error) => {
      console.log("Error", error);
    };
  }

  const imgUpload = async () => {
    try {
      const response = await fetch("https://localhost:3001/image/uploadImg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: body.name,
          myFile: image,
        }),
      });
      const json = await response.json()
      console.log(json);
      
    } catch (err) {
      
      };
    }
  };

  return (
    <div>
      <div>
        Lets Upload Image
        <input accept="image/*" type="file" onChange={turnToBase64} />
        {image == "" || image == null ? (
          ""
        ) : (
          <img width={100} height={100} src={image} />
        )}
        <button onClick={imgUpload}>Upload Image</button>
      </div>
    </div>
  );
};

export default UploadImg;
