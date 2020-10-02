import React from "react";

export default function Footer() {
  const bootstrapUrl = "https://getbootstrap.com/"
  return (
    <footer className="footer mt-auto py-3 text-muted font-weight-light">
      <div className="container bg-light">
        <p>
          Built using{" "}
          <a href={bootstrapUrl} className="link">
            Bootstrap
          </a>
        </p>
      </div>
    </footer>
  );
}
