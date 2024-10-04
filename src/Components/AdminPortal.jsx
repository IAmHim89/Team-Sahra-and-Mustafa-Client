import React, { useState, useEffect } from "react";

const AdminPortal = ({ allImages }) => {
  return (
    <div>
      <p>hello world</p>
      {allImages?.map((img) => {
        return (
          <div>
            <p> {img.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPortal;
