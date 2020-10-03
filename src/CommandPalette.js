import React from "react";
import Image from "./Image";
import PencilFill from "./images/pencil-fill.svg";
import TrashFill from "./images/trash-fill.svg";

export default function CommandPalette() {
  const createCommand = (icon, altText, dropdown, onClick) => {
    if (dropdown) {
      return (
        <div className="btn-group-sm p-3" role="group">
          <button
            type="button"
            className="btn btn-outline-secondary dropdown-toggle"
            id="btnGroupDrop1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Image src={icon} altText={altText} />
          </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="a">
              Dropdown link
            </a>
            <a className="dropdown-item" href="b">
              Dropdown link
            </a>
          </div>
        </div>
      );
    }
    return (
      <div className="btn-group-sm p-3">
        <button type="button" className="btn btn-outline-secondary">
          <Image src={icon} altText={altText} />
        </button>
      </div>
    );
  };

  return (
    <div className="btn-toolbar m-auto" role="group">
      {createCommand(PencilFill, "poop", true)}
      {createCommand(TrashFill, "poop")}
    </div>
  );
}
