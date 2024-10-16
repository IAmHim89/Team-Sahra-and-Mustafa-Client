import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Auth from "./Components/Auth";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import AdminPortal from "./Components/AdminPortal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
    navigate("/admin");
  };

  const removeToken = () => {
    console.log("Your token has been removed!");
    setPersonalToken("");
    localStorage.clear();
    navigate("/");
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
      <header></header>

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home allImages={allImages} />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              personalToken ? (
                <AdminPortal imgDownload={imgDownload} allImages={allImages} />
              ) : null
            }
          />

          <Route
            path="/auth"
            element={
              !personalToken ? (
                <Auth updateToken={updateToken} />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "45%",
                    transform: "transition(-20%, -50%)",
                  }}
                >
                  <p className="text-white">Thank you for signing In!</p>
                </div>
              )
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer_container">
          <div>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
          <div>
            <Link to="https://www.instagram.com/explore/locations/252682088449202/canyon-city-grill/">
              <FontAwesomeIcon
                icon={faSquareInstagram}
                size="2xl"
                style={{
                  color: "aqua",
                  position: "absolute",
                  bottom: "",
                  left: "45%",
                }}
              />
            </Link>

            <Link to="https://www.facebook.com/canyoncitygrill/">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2xl"
                style={{
                  color: "#065df4",
                  position: "absolute",
                  left: "50%",
                }}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
