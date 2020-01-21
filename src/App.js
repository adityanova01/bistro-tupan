import React from "react";
import "./App.css";
import Logo from "./components/brandLogo";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <Logo />
      </div>
      <Navbar/>
      <Carousel/>
    </div>
  );
}

export default App;