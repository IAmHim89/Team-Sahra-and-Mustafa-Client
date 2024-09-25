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

function App() {
  const [personalToken, setPersonalToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("myToken");
    if (token) {
      setPersonalToken(token);
    }
  });

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

  return (
    <div>
      {/* Navbar */}

      <Nav />

      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/beverage" element={<Beverage />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/auth"
            element={
              !personalToken ? (
                <Auth updateToken={updateToken} />
              ) : (
                <>
                  <button
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      margin: "1em",
                      backgroundColor: "orangered",
                    }}
                    onClick={() => removeToken()}
                  >
                    Logout
                  </button>
                </>
              )
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <footer></footer>
    </div>
  );
}

export default App;
