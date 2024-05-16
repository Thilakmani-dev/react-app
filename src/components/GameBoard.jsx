import { useEffect, useState } from "react";

import "./GameBoard.css";

const GameData = {
  India: "Delhi",
  France: "Paris",
  Spain: "Madrid",
  Russia: "Moscow",
  Japan: "Tokyo",
  China: "Beijing",
  England: "London",
  Newzealand: "Wellington",
};

const GameBoard = () => {
  const [options, setOptions] = useState([]);
  useEffect(function onMount() {
    const options = Object.entries(GameData).flat();
    // const shuffledOptions;
    setOptions(options);
  }, []);

  function handleClick(e) {
    const { target } = e;
    console.log("click", target.getAttribute("data-value"));
  }

  return (
    <div className="gameBoard">
      {options.map((option) => (
        <button
          key={option}
          data-value={option}
          onClick={handleClick}
          className="option"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
