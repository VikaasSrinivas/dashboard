import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ dataPoints }) {
  const chartData = {
    labels: dataPoints.map(d => d.time),
    datasets: [{
      label: "BTC Price (USD)",
      data: dataPoints.map(d => d.price),
      borderWidth: 2,
      fill: false,
    }]
  };

  return <Line data={chartData} />;
}

export default Chart;
