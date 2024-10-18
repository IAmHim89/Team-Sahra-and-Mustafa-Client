import React, { useState, useEffect } from "react";
import "./Css_files/Admin.css";
import UploadImg from "./UploadImg";
import APIURL from "../helpers";
const AdminPortal = ({ allImages, imgDownload }) => {
  const [image, setImage] = useState("");

  function turnToBase64(e) {
    setImage(e.target.files[0]);
  }

  const imageUpdate = async (imgId) => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      const response = await fetch(`${APIURL}/image/update/${imgId}`, {
        method: "PUT",

        headers: {
          Authorization: "Bearer " + localStorage.getItem("myToken"),
        },
        body: formData,
      });
      const json = await response.json();
      console.log(json);
      imgDownload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="adminPortal_container">
      <h1>Admin Image Upload</h1>
      {allImages?.map((img) => {
        const dataUrl = `data:${img.myFile.mimetype};base64,${img.myFile.buffer}`;
        console.log(img._id);
        return (
          <div className="table_container">
            <table>
              <tr>
                <th>Image name</th>
                <th>Image Upload </th>
              </tr>
              <tr>
                <td>
                  <p>
                    {" "}
                    <img src={dataUrl} /> {img.name}
                  </p>
                </td>
                <td>
                  <input
                    name="image"
                    accept="image/*"
                    type="file"
                    onChange={turnToBase64}
                  />
                  <button onClick={() => imageUpdate(img._id)}>
                    Upload Image
                  </button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
      {/* <UploadImg imgDownload={imgDownload} allImages={allImages} /> */}
    </div>
  );
};

export default AdminPortal;
