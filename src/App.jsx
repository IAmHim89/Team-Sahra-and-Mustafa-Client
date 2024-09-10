import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Beverage from "./Components/Beverage";

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
