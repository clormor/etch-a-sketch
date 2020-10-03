import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import EtchASketchGrid from "./EtchASketchGrid";
import CommandPalette from "./CommandPalette";
import Footer from "./Footer";
import Image from "./Image";
import AppLogo from "./images/logo.svg";

function App() {
  let headerImage = <Image src={AppLogo} altText="Etch-A-Sketch Logo" />;

  return (
    <div className="h-100 d-flex flex-column text-center">
      <Header title="Etch-A-Sketch" image={headerImage} />
      <Banner />
      <EtchASketchGrid />
      <CommandPalette />
      <Footer />
    </div>
  );
}

export default App;
