import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
<<<<<<< HEAD
import Nav from "./Components/Nav";
=======
import Beverage from "./Components/Beverage";
>>>>>>> 44e46c651a2ff5be8ee66340ed441363f4fb3a21

function App() {
  return (
    <div>
      <nav></nav>
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <About />
        <Beverage />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
