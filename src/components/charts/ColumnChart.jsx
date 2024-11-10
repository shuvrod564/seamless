import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({profileTrades}) => {
  // console.log("profileTrades: ",profileTrades);
  
  // Function to format date to YYYY-MM-DD
  // const formatDate = (dateString) => dateString.split(' ')[0];
  
  // // Group by date and accumulate buy and sell prices
  // const priceByDay = profileTrades?.reduce((acc, item) => {
  //   const date = formatDate(item.bought_at);
  
  //   if (!acc[date]) {
  //     acc[date] = { buy: 0, sell: 0 };
  //   }
  
  //   acc[date].buy += item.buy_price;
  //   acc[date].sell += item.sell_price;
  
  //   return acc;
  // }, {});
  
  // // Convert the grouped data into the required format
  // const result = [
  //   {
  //     name: 'Buy',
  //     data: Object.values(priceByDay || {}).map(day => day.buy)
  //   },
  //   {
  //     name: 'Sell',
  //     data: Object.values(priceByDay || {}).map(day => day.sell)
  //   }
  // ];
  
  // console.log(result);

  // const weekDays = profileTrades?.map(item => {
  //   const date = new Date(item.bought_at);
  //   return date.toLocaleDateString('en-US', { weekday: 'long' });
  // });
  
  // console.log(weekDays);
  
  // Function to get day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
  function getDayOfWeek(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', { weekday: 'long' });
  }
  
  // Initialize a data structure to store buy/sell prices by day of the week
  const dayWiseData = {
    Sunday: { profit: 0, loss: 0 },
    Monday: { profit: 0, loss: 0 },
    Tuesday: { profit: 0, loss: 0 },
    Wednesday: { profit: 0, loss: 0 },
    Thursday: { profit: 0, loss: 0 },
    Friday: { profit: 0, loss: 0 },
    Saturday: { profit: 0, loss: 0 },
  };
  
  // Loop through the items and aggregate the profit and sell prices
  profileTrades?.map(item => {
    let pl = Number(item.profit_and_loss)
    const day = getDayOfWeek(item.bought_at);
    if (dayWiseData[day]) {
      if(pl>0){
        dayWiseData[day].profit += pl;
      }else{
        dayWiseData[day].loss += -pl;
      }
    }
  });
  
  // Transform the data into the desired format
  const result = [
    {
      name: 'Profit',
      data: Object.values(dayWiseData || {}).map(day => day.profit)
    },
    {
      name: 'Loss',
      data: Object.values(dayWiseData || {}).map(day => day.loss)
    }
  ];
  
  console.log(result);
  
  

  // const series = [{
  //   name: 'Buy',
  //   data: [44, 55, 57, 56, 61, 58, 63]
  // }, {
  //   name: 'Sell',
  //   data: [76, 85, 101, 98, 87, 105, 91]
  // }];.

  const series = result;

  const options = {
    chart: {
      type: 'bar',
      height: 310
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
    // yaxis: {
    //   title: {
    //     text: '$ (thousands)',
    //     show: false,
    //   }
    // },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        }
      }
    },
    colors: ['#FF5733', '#14BA6D']
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={450} />





      
    </div>
  );
};

export default ColumnChart;
