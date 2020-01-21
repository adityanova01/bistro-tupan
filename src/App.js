import React from "react";
import "./App.css";
import Logo from "./components/brandLogo";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Jumbotron from "./components/jumbotron";
import Banner from "./components/banner";
import Parallax from "./components/parallax";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <Logo />
      </div>
      <Navbar/>
      <Carousel/>
      {/* <Parallax/> */}
      <Banner/>
      <Jumbotron/>
    </div>
  );
}

export default App;