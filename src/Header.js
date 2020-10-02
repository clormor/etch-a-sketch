import React from "react";

export default function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">
        <div className="navbar-brand d-flex align-items-center">
          <div className="pr-3">{props.image}</div>
          <strong>{props.title}</strong>
        </div>
      </div>
    </nav>
  );
}
