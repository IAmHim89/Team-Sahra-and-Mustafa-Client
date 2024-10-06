import React, { useState, useEffect } from "react";
import "./Css_files/Admin.css";

const AdminPortal = ({ allImages }) => {
  return (
    <div>
      <p>hello world</p>
      {allImages?.map((img) => {
        return (
          <div className="table_container">
            <table>
              <tr>
                <th>Image name</th>
                <th>Image Upload </th>
              </tr>
              <tr>
                <td>
                  <p> {img.name}</p>
                </td>
                <td>
                  <input type="file" accept="image/*" />
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPortal;
