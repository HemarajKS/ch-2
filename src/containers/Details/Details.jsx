import React from 'react';
import classes from './Details.module.scss';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from 'react-vis';

const Details = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.detailsTitle}>
        <h3 className={classes.stockName}>INFOSYS</h3>
        <div className={classes.stockSubname}>INFY|LTD</div>
      </div>

      <div className={classes.detailsGraph}>
        <XYPlot width={800} height={200}>
          <HorizontalGridLines />
          <LineSeries
            data={[
              { x: 1, y: 10 },
              { x: 2, y: 5 },
              { x: 3, y: 15 },
            ]}
          />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    </div>
  );
};

export default Details;
