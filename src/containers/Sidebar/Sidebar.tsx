import { Tab } from '@mui/material';
import classes from './Sidebar.module.scss';
import ScrollableTabsButtonPrevent from '../../components/Tabs';
import data from '../../assets/data/data.json';

const Sidebar = () => {
  console.log('data', data.watchlists);
  const tabList = data.watchlists;
  return (
    <div className={classes.wrapper}>
      <div className={classes.wishlistContainer}>
        <ScrollableTabsButtonPrevent>
          {tabList.map((ele, i) => (
            <Tab
              label={`Wishlist${i + 1}`}
              className={classes.wishlist}
              sx={{
                '& .Mui-selected': {
                  bgcolor: '#000000',
                },
              }}
            />
          ))}
        </ScrollableTabsButtonPrevent>
      </div>
      <div className={classes.basket}>Basket</div>
    </div>
  );
};

export default Sidebar;
