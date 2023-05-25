import React from "react";
import classes from "./Details.module.scss";

const Details = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.detailsTitle}>
        <h3 className={classes.stockName}>INFOSYS</h3>
        <div className={classes.stockSubname}>INFY|LTD</div>
      </div>

      <div className={classes.detailsGraph}></div>
    </div>
  );
};

export default Details;
