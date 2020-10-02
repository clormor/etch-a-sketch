import React from "react";
import Link from "./Link"
import BootstrapLogo from "./images/bootstrap.svg";
import ReactLogo from "./images/react.svg";

export default function Footer() {
  const bootstrapLink = (
    <Link
      url="https://getbootstrap.com/"
      text="Bootstrap"
      logo={BootstrapLogo}
      logoAltText="Bootstrap Logo"
    />
  );
  const reactLink = (
    <Link
      url="https://reactjs.org/"
      text="React"
      logo={ReactLogo}
      logoAltText="React Logo"
    />
  );

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
