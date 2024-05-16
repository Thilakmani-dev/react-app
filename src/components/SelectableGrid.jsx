import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const SelectableGrid = ({ rows = 10, cols = 10 }) => {
  const [selectedCells, setSelectedCells] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  function onMouseDownhandler(cell) {
    setIsMouseDown(true);
    setSelectedCells([cell]);
  }

  function onMouseUpHandler(cell) {
    setIsMouseDown(false);
  }

  function onMouseEnterHandler(cell) {
    if (isMouseDown) {
      setSelectedCells((cells) => [...cells, cell]);
    }
  }

  useEffect(
    function getSelectedCells() {
      console.log(selectedCells, isMouseDown);
    },
    [selectedCells, isMouseDown]
  );

  return (
    <div
      className="selectableGrid"
      style={{
        "--cols": 10,
        "--rows": 10,
      }}
    >
      {[...Array(rows * cols).keys()].map((_, index) => {
        return (
          <div
            className={`cell ${
              selectedCells.includes(index + 1) ? "selected" : ""
            }`}
            key={index}
            onMouseDown={() => onMouseDownhandler(index + 1)}
            onMouseEnter={() => onMouseEnterHandler(index + 1)}
            onMouseUp={() => onMouseUpHandler(index + 1)}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default SelectableGrid;
