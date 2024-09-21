import React from "react";
import { useState, useRef } from "react";
import "../Components/Css_files/Auth.css";

const Auth = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef(null);

  const handleCLick = () => {
    inputRef.current.focus();
  };

  console.log(props.updateToken);
  const handleSignIn = async () => {
    try {
      setErrorMsg("");
      const result = await fetch("http://localhost:3001/admin/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminName: adminName,
          password: password,
        }),
      });

      const json = await result.json();
      console.log(json);
      props.updateToken(json.Token);

      if (json.Error) {
        throw new Error(json.Error);
      }
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div>
      <div>
        <h3 style={{ color: "red" }}>{errorMsg}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <h1>Administrative Login</h1>
          <input type="text" ref={inputRef} placeholder="AdminName" require />
          <input
            type="password"
            ref={inputRef}
            placeholder="Password"
            require
            min={5}
            max={12}
          />
          <button onClick={handleCLick}>Admin Login</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
