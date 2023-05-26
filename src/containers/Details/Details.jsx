import React from 'react';
import classes from './Details.module.scss';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const chartData = {
  series: [
    {
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'text',
      lines: {
        show: true,
      },
    },
    yaxis: {
      title: {
        text: 'Points',
      },
      min: 0,
      lines: {
        show: true,
      },
    },
    grid: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points';
          }
          return y;
        },
      },
    },
  },
};

const Details = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.detailsTitle}>
        <h3 className={classes.stockName}>INFOSYS</h3>
        <div className={classes.stockSubname}>INFY|LTD</div>
      </div>

      <div className={classes.detailsGraph}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={200}
        />
      </div>
    </div>
  );
};

export default Details;
