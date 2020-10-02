import React from "react";
import EtchASketchGrid from "./EtchASketchGrid";

export default function EtchASketch() {
  const message = `This etch-a-sketch game was written for `;
  return (
    <main role="main" className="flex-shrink-0">
      <section className="jumbotron text-center">
        <div className="container">
          <p className="lead text-muted">
            {message}
            <a
              href="https://www.theodinproject.com"
              className="link text-decoration-none"
            >
              The Odin Project
            </a>
          </p>
        </div>
      </section>

      <div className="album py-3">
        <EtchASketchGrid />
      </div>
    </main>
  );
}
