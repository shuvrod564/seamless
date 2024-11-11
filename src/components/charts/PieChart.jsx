import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./styles.css";

const PieChart = () => {
  // Static data for demonstration
  const staticData = [
    { exchange: "MCX", profit_and_loss: 100 },
    { exchange: "NFO", profit_and_loss: 200 },
    { exchange: "CRYPTO", profit_and_loss: 50 },
    { exchange: "FX", profit_and_loss: 150 },
    { exchange: "CDS", profit_and_loss: 75 },
    { exchange: "US", profit_and_loss: 300 }
  ];

  let type = ["MCX", "NFO", "CRYPTO", "FX", "CDS", "US"];
  const [label, setLabel] = useState([]);
  
  const groupedData = staticData.reduce((acc, item) => {
    if (acc[item.exchange]) {
      acc[item.exchange] += Number(item.profit_and_loss); // Sum the amounts for the same name
    } else {
      acc[item.exchange] = Number(item.profit_and_loss); // Initialize amount for new name
    }
    return acc;
  }, {});

  // Extract unique names and their summed amounts
  const uniqueNames = Object.keys(groupedData || {}); // Array of unique names
  const uniqueAmounts = Object.values(groupedData || {}); // Array of summed amounts

  const series = uniqueAmounts; // Data for your pie chart

  useEffect(() => {
    let label = [];
    if (groupedData) {
      type.map((item) => {
        if (groupedData[item]) {
          let i = `${item}: ${groupedData[item]}`;
          label.push(i);
        } else {
          let i = `${item}: 0`;
          label.push(i);
        }
      });
    }
    setLabel(label);
    // console.log(label);
  }, [JSON.stringify(groupedData)]);

  const options = {
    chart: {
      type: "pie",
    },
    labels: [...label],
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    dataLabels: {
      enabled: false, // Hides the data labels
    },
    colors: ["#0070FF", "#14BA6D", "#E3566E", "#FFC700"],
  };

  return (
    <div>
      <Chart options={options} series={series} type="pie" width="500" className="mx-auto" />
    </div>
  );
};

export default PieChart;
