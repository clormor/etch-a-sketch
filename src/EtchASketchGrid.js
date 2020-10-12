import React, { useState } from "react";
import "./css/EtchASketch.css";

function GridSquare(props) {
  const [color, setColor] = useState(props.color);

  const processMouseOver = (event) => {
    setColor(props.chosenColor);
  };

  const renderCell = () => {
    return (
      <div
        className="etch-cell"
        onMouseOver={processMouseOver}
        style={{ backgroundColor: color }}
      ></div>
    );
  };

  return renderCell();
}

export default function EtchASketchGrid(props) {
  const gridSize = 16;

  const renderRow = (gridSize) => {
    let cells = [];
    for (let colNum = 0; colNum < gridSize; colNum++) {
      cells.push(
        <GridSquare
          color={props.defaultColor}
          chosenColor={props.chosenColor}
        />
      );
    }
    return <div className="etch-row">{cells}</div>;
  };

  const renderGrid = (gridSize) => {
    let rows = [];
    for (let rowNum = 0; rowNum < gridSize; rowNum++) {
      rows.push(renderRow(gridSize));
    }
    return <div className="etch-grid">{rows}</div>;
  };

  return renderGrid(gridSize);
}
