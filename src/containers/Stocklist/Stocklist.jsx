import ReactApexChart from 'react-apexcharts';
import classes from './Stocklist.module.scss';

import React from 'react';

const chartData = {
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'butt',
    colors: undefined,
    width: 0.5,
    dashArray: 0,
  },
  options: {
    chart: {
      height: 100,
      type: 'area',
    },
    toolbar: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
};
const Stocklist = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.stockItem}>
        <div className={classes.stockInfoLeft}>
          <div className={classes.stockGraph}>
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="area"
              height={100}
              style={{ top: '-24px', position: 'relative' }}
            />
          </div>
          <div className={classes.stockName}>INFY</div>
        </div>
        <div className={classes.stockInfoRight}>
          <div className={classes.stockdata1}>3231.wdc</div>
          <div className={classes.stockdata2}>956.89</div>
        </div>
      </div>
      <div className={classes.stockItem}>
        <div className={classes.stockInfoLeft}>
          <div className={classes.stockGraph}></div>
          <div className={classes.stockName}>TSLA</div>
        </div>
        <div className={classes.stockInfoRight}>
          <div className={classes.stockdata1}>3231.wdc</div>
          <div className={classes.stockdata2}>956.89</div>
        </div>
      </div>
    </div>
  );
};

export default Stocklist;
