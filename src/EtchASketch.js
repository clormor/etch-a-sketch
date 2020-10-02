import React from "react";

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
            <a href="https://www.theodinproject.com" className="link">
              The Odin Project
            </a>
          </p>
        </div>
      </section>

      <div className="album py-5">
        <div className="container">content goes here please</div>
      </div>
    </main>
  );
}
