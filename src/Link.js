import React from "react";
import Image from "./Image";

export default function Link(props) {
  return (
    <a href={props.url} className="text-info link text-decoration-none">
      {`${props.text}${props.logo ? " " : ""}`}
      {props.logo ? (
        <Image src={props.logo} altText={props.logoAltText} />
      ) : null}
    </a>
  );
}
