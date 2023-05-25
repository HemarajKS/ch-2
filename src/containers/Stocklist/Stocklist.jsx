import classes from "./Stocklist.module.scss";

import React from "react";

const Stocklist = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.stockItem}>
        <div className={classes.stockInfoLeft}>
          <div className={classes.stockGraph}></div>
          <div className={classes.stockName}>INFY</div>
        </div>
        <div className={classes.stockInfoRight}>
        <div className={classes.stockdata1} >
            3231.wdc
          </div>
          <div className={classes.stockdata2} >
            956.89
          </div>
        </div>
      </div>
      <div className={classes.stockItem}>
        <div className={classes.stockInfoLeft}>
          <div className={classes.stockGraph}></div>
          <div className={classes.stockName}>TSLA</div>
        </div>
        <div className={classes.stockInfoRight}>
          <div className={classes.stockdata1} >
            3231.wdc
          </div>
          <div className={classes.stockdata2} >
            956.89
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stocklist;
