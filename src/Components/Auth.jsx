import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Css_files/Auth.css";
import UploadImg from "./UploadImg";
import APIURL from "../helpers";

const Auth = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const adminRef = useRef("");
  const passwordRef = useRef("");

  const handleCLick = () => {
    passwordRef.current.focus();
  };

  console.log(props.updateToken);
  const handleSignIn = async () => {
    try {
      setErrorMsg("");
      console.log(APIURL);
      const result = await fetch(`${APIURL}/admin/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminName: adminRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      const json = await result.json();
      console.log(json);

      if (json.Error) {
        throw new Error(json.Error);
      } else {
        props.updateToken(json.Token);
      }
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="container_background">
      <div className="form_flex2">
        <h3 style={{ color: "red" }}>{errorMsg}</h3>
        <form
          className="form_container"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <div className="input_flex">
            <h2>Administrative Login</h2>
            <input type="text" ref={adminRef} placeholder="AdminName" require />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
              require
              min={5}
              max={12}
            />
            <button onClick={handleCLick}>Submit</button>
          </div>
        </form>
      </div>
      {/* <UploadImg /> */}
    </div>
  );
};

export default Auth;
