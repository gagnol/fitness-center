import styles from '../../styles/sidebar.module.css';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NextLink from "next/link";
import React from 'react'
import { Box } from '@mui/material';

const Sidebar = () => {
  
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Box style={{ textDecoration: "none" }}>
          <span className={styles.logo}>La Bisteca</span>
        </Box>
      </div>
      <hr />
      <div className={styles.center}>
        <ul   className={styles.centerul}>
          <p className={styles.title}>MAIN</p>
          <li className={styles.titleli}>
            <DashboardIcon className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>LISTS</p>
          
          <Box style={{ textDecoration: "none" }}>
          <NextLink href="/admin/users" passHref>
            <li className={styles.titleli} button component="a">
              <PersonOutlineIcon className={styles.icon}/>
              <span>Users</span>
            </li>
            </NextLink>
          </Box>
         
                        
          <Box style={{ textDecoration: "none" }}>
          <NextLink href="/admin/products" passHref>
            <li className={styles.titleli} button component="a">
              <StoreIcon className={styles.icon} />
              <span>Products</span>
            </li>
            </NextLink>
          </Box>
          <li className={styles.titleli}>
            <CreditCardIcon className={styles.icon} />
            <span>Orders</span>
          </li>
          <li className={styles.titleli}>
            <LocalShippingIcon className={styles.icon} />
            <span>Delivery</span>
          </li>
          <p className={styles.title}>USEFUL</p>
          <li className={styles.titleli}>
            <InsertChartIcon className={styles.icon} />
            <span>Stats</span>
          </li>
          <li className={styles.titleli}>
            <NotificationsNoneIcon className={styles.icon} />
            <span>Notifications</span>
          </li>
          <p className={styles.title}>SERVICE</p>
          <li className={styles.titleli}>
            <SettingsSystemDaydreamOutlinedIcon className={styles.icon1} />
            <span>System Health</span>
          </li>
          <li className={styles.titleli}>
            <PsychologyOutlinedIcon className={styles.icon} />
            <span>Logs</span>
          </li>
          <li className={styles.titleli}>
            <SettingsApplicationsIcon className={styles.icon} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <li className={styles.titleli}>
            <AccountCircleOutlinedIcon className={styles.icon} />
            <span className={styles.span}>Profile</span>
          </li>
          <li className={styles.titleli}>
            <ExitToAppIcon className={styles.icon} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div
          className={styles.colorOption}
   
        ></div>
        <div
          className={styles.colorOption}

        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
