import React from "react";
import BootstrapLogo from "./images/bootstrap.svg";
import ReactLogo from "./images/react.svg";

export default function Footer() {
  const bootstrapUrl = "https://getbootstrap.com/";
  const reactUrl = "https://reactjs.org/";

  const createLink = (url, logo, text) => {
    return (
      <a href={url} className="link text-decoration-none">
        {`${text} `}
        <img src={logo} alt="Bootstrap Logo" />
      </a>
    );
  };

  const bootstrapLink = createLink(bootstrapUrl, BootstrapLogo, 'Bootstrap');
  const reactLink = createLink(reactUrl, ReactLogo, 'React');

  return (
    <footer className="footer mt-auto py-3 text-muted font-weight-light">
      <div className="container bg-light">
        <p>
          Built using {bootstrapLink} and {reactLink}
        </p>
      </div>
    </footer>
  );
}
