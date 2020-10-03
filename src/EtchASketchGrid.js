import React from "react";
import "./css/EtchASketch.css";

export default function EtchASketchGrid() {
  const gridSize = 16;

  const renderCell = (rowNum, colNum, gridSize) => {
    let classes = ["etch-cell"];

    if (rowNum === 0) {
      classes.push("etch-top-row");
    }

    if (rowNum === gridSize - 1) {
      classes.push("etch-bottom-row");
    }

    if (colNum === 0) {
      classes.push("etch-left-col");
    }

    if (colNum === gridSize - 1) {
      classes.push("etch-right-col");
    }

    const allClasses = classes.join(" ");

    return <div className={allClasses}></div>;
  };

  const renderRow = (rowNum, gridSize) => {
    let cells = [];
    for (let colNum = 0; colNum < gridSize; colNum++) {
      cells.push(renderCell(rowNum, colNum, gridSize));
    }
    return <div className="etch-row">{cells}</div>;
  };

  const renderGrid = (gridSize) => {
    let rows = [];
    for (let rowNum = 0; rowNum < gridSize; rowNum++) {
      rows.push(renderRow(rowNum, gridSize));
    }
    return <div className="etch-grid">{rows}</div>;
  };

  return renderGrid(gridSize);
}
