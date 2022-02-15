import React from "react";
import "chart.js/auto";
import { Radar } from "react-chartjs-2";

const RadarChart = () => {
  const data = {
    labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Radar Chart</h1>
      <div style={{ width: "500px", margin: "0 auto" }}>
        <Radar data={data} />
      </div>
    </div>
  );
};

export default RadarChart;
