import React from "react";
// import logo from "../public/logo.svg";
import "./App.css";
import Header from "./Header";
import EtchASketch from "./EtchASketch";
import Footer from "./Footer";

function App() {
  return (
    <div className="App h-100 d-flex flex-column">
      <Header />
      <EtchASketch />
      <Footer />
    </div>
  );
}

export default App;
