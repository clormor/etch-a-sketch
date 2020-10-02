import React from "react";
import "./css/EtchASketch.css";

export default function EtchASketchGrid() {
  const gridSize = 16;

  const renderCell = (rowNum, colNum, gridSize) => {
    return <div className="etchCell"></div>;
  };

  const renderRow = (rowNum, gridSize) => {
    let cells = [];
    for (let colNum = 0; colNum < gridSize; colNum++) {
      cells.push(renderCell(rowNum, colNum, gridSize));
    }
    return <div className="etchRow">{cells}</div>;
  };

  const renderGrid = (gridSize) => {
    let rows = [];
    for (let rowNum = 0; rowNum < gridSize; rowNum++) {
      rows.push(renderRow(rowNum, gridSize));
    }
    return <div className="etchGrid">{rows}</div>;
  };

  return renderGrid(gridSize);
}
