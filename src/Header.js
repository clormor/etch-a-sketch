import React from "react";
import AppLogo from "./images/logo.svg";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container d-flex justify-content-between">
          <div class="navbar-brand d-flex align-items-center">
            <img src={AppLogo} alt="Etch-A-Sketch Logo" />
            <strong>Etch-A-Sketch</strong>
          </div>
        </div>
      </nav>
    </header>
  );
}
