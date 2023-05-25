import React from "react";
import classes from "./Header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.indexFundInfo}>
        <div className={[classes.infoTab1, classes.infoTabs].join(" ")}></div>
        <div className={[classes.infoTab2, classes.infoTabs].join(" ")}></div>
      </div>
      <div className={classes.searchbox}>
        <div className={classes.searchicon}>
          <SearchIcon fontSize="large" />
        </div>
        <div className={classes.notification}>
          <div className={classes.bell}>
            <NotificationsIcon fontSize="small" />
          </div>
          <div className={classes.number}>21</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
