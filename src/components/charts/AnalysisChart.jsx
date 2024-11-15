import { Select } from 'antd';
import React from 'react';
import Chart from 'react-apexcharts';

const AnalysisChart = () => {
  const series = [
    {
      name: 'Analysis',
      data: [44, 55, 57, 56, 61, 58, 63, 57, 56, 61, 58],
    }, 
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 310,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Oct 01', 'Oct 03', 'Oct 06', 'Oct 09', 'Oct 12', 'Oct 15', 'Oct 18', 'Oct 21', 'Oct 23', 'Oct 26', 'Oct 29'],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    colors: ['#3A7AFE'],
  };

  return (
    <div className="bg-white rounded-lg w-full">
      <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-dark">Analysis</h2>
        <div className="w-full max-w-[136px]">
          <Select
            defaultValue="Oct 2024"
            className='!w-full !bg-[#F9F9F9]'
            size='md'
            options={[
              {
                value: 'Oct 2024',
                label: 'Oct 2024',
              },
              {
                value: 'Nov 2024',
                label: 'Nov 2024',
              },
              {
                value: 'Nov 2024',
                label: 'Nov 2024',
              },
            ]}
          />
        </div>
      </div>
      <div className="p-4 flex justify-center">
        <Chart options={options} series={series} type="bar" height={450} width={'100%'} className="w-full" />
      </div>
    </div>
  );
};

export default AnalysisChart;
