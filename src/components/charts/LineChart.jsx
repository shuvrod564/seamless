import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const options = {
    chart: {
      type: 'line',
      height: 450,
      width: '100%',
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['Oct 01', 'Oct 03', 'Oct 06', 'Oct 09', 'Oct 12', 'Oct 15', 'Oct 18', 'Oct 21', 'Oct 24', 'Oct 27', 'Oct 30'],
    },
  };

  const series = [
    {
      name: 'Payout',
      data: [30, 40, 35, 50, 49, 60, 70, 30, 40, 35, 50, 49,],
    },
    { name: 'Paying', data: [20, 30, 25, 40, 45, 50, 60, 20, 30, 25, 40], }
  ];

  return (
    <div className="chart-container">
      <Chart options={options} series={series} height={450} />
    </div>
  );
};

export default LineChart;
