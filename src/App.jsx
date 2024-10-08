import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Beverage from "./Components/Beverage";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Auth from "./Components/Auth";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminPortal from "./Components/AdminPortal";

function App() {
  const [personalToken, setPersonalToken] = useState("");
  const [allImages, setAllImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("myToken");
    if (token) {
      setPersonalToken(token);
    }
    imgDownload();
  }, []);

  const updateToken = (token) => {
    console.log("You have updated your token");
    localStorage.setItem("myToken", token);
    setPersonalToken(token);
    navigate("/");
  };

  const removeToken = () => {
    console.log("Your token has been removed!");
    setPersonalToken("");
    localStorage.clear();
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
      {/* Navbar */}
      <Nav removeToken={removeToken} />

      {/* Header */}
      <header>
        <Header allImages={allImages} />
      </header>
      <AdminPortal imgDownload={imgDownload} allImages={allImages} />

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beverage" element={<Beverage />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth updateToken={updateToken} />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer></footer>
    </div>
  );
}

export default App;
