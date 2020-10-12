import React from "react";
import Image from "./Image";
import TrashFill from "./images/trash-fill.svg";

export default function CommandPalette(props) {
  const chosenColor = props.palette.color;
  const setColor = props.palette.setColor;

  const handleButtonPress = (event) => setColor(event.target.id);

  const createButtonGroup = (buttons) => {
    return <div className="btn-group-sm p-3">{buttons}</div>;
  };
  const createColorButton = (color) => {
    let className = "myCircle";
    if (color === chosenColor) {
      className += " selected";
    }
    return (
      <button
        id={color}
        className={className}
        style={{ backgroundColor: color }}
        onClick={handleButtonPress}
      ></button>
    );
  };
  const createIconButton = (icon, altText, onClick) => {
    return (
      <button
        type="button"
        className="btn btn-outline-secondary rounded-circle"
        onClick={onClick}
      >
        <Image src={icon} altText={altText} />
      </button>
    );
  };

  const clearGrid = () => {
    setColor(props.palette.clearColor);
  };

  let redButton = createColorButton("red");
  let greenButton = createColorButton("green");
  let clearButton = createIconButton(TrashFill, "clear", clearGrid);

  return (
    <div className="btn-toolbar m-auto" role="group">
      {createButtonGroup([redButton, greenButton])}
      {createButtonGroup([clearButton])}
    </div>
  );
}
