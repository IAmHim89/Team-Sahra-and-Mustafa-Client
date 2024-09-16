import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Beverage from "./Components/Beverage";
import Review from "./Components/Review";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <Nav />
        </nav>

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
          </Routes>
        </main>

        {/* Footer */}
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
