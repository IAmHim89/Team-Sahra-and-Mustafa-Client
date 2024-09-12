import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <header></header>
      <main>
        <Home />
        <About />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
