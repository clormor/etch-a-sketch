import React from "react";
import Link from "./Link";

export default function Banner() {
  const topLink = (
    <Link url="https://www.theodinproject.com" text="The Odin Project" />
  );

  return (
    <section className="jumbotron text-center">
      <p className="lead text-muted">Written for {topLink}</p>
    </section>
  );
}
