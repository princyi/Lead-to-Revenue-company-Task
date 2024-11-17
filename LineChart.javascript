import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  if (!data) return null;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Deaths',
        data: Object.values(data.deaths),
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={chartData} />
    </div>
  );
}

export default LineChart;
