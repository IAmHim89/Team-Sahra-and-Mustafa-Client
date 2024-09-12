import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Beverage from "./Components/Beverage";

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
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
