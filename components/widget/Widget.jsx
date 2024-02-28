
import styles from '../../styles/widget.module.css';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import React from 'react'

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <SettingsApplicationsIcon
            className={styles.icon}
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <SettingsApplicationsIcon
            className={styles.icon}
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <SettingsApplicationsIcon
            className={styles.icon}
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <SettingsApplicationsIcon
            className={styles.icon}
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <span className={styles.title}>{data.title}</span>
        <span className={styles.counter}>
          {data.isMoney && "$"} {amount}
        </span>
        <span className={styles.link}>{data.link}</span>
      </div>
      <div className={styles.right}>
        <div className={styles.percentagepositive}>
          <SettingsApplicationsIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
