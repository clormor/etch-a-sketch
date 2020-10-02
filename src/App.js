import React from "react";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import EtchASketchGrid from "./EtchASketchGrid";
import Footer from "./Footer";
import Image from "./Image";
import AppLogo from "./images/logo.svg";

function App() {
  let headerImage = <Image src={AppLogo} altText="Etch-A-Sketch Logo" />;

  return (
    <div className="App h-100 d-flex flex-column">
      <Header title="Etch-A-Sketch" image={headerImage} />
      <Banner />
      <EtchASketchGrid />
      <Footer />
    </div>
  );
}

export default App;
