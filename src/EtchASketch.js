import React from "react";
import EtchASketchGrid from "./EtchASketchGrid"

export default function EtchASketch() {
  const message =
    `I hope you enjoy playing Etch-A-Sketch! ` +
    `This was developed whilst learning HTML/CSS through `;
  return (
    <main role="main" className="flex-shrink-0">
      <section className="jumbotron text-center">
        <div className="container">
          <p className="lead text-muted">
            {message}
            <a href="https://www.theodinproject.com" className="link text-decoration-none">
              The Odin Project
            </a>
          </p>
        </div>
      </section>

      <div className="album py-5">
        <EtchASketchGrid />
      </div>
    </main>
  );
}
