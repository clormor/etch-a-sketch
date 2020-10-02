import React from "react";

export default function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">
        <div class="navbar-brand d-flex align-items-center">
          {props.image}
          <strong>{props.title}</strong>
        </div>
      </div>
    </nav>
  );
}
