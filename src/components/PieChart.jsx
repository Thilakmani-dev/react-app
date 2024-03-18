import { useState } from "react";
import "./PieChart.css";

const PieChart = () => {
  const [percentage, setPercentage] = useState(0);
  function onChangeHandler(e) {
    setPercentage(parseInt(e.target.value));
  }

  return (
    <div className="parent">
      <input type="range" onChange={onChangeHandler} />
      <div
        className="circle"
        style={{
          "--percentage": `${percentage}%`,
        }}
      />
    </div>
  );
};

export default PieChart;
