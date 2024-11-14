import React from 'react';
import Chart from 'react-apexcharts';

const BasicLineChart = () => {
  const options = {
    chart: {
      type: 'line',
      height: 350,
    },
   
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default BasicLineChart;
