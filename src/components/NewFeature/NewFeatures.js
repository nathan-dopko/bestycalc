import React, { useState } from "react";
import styles from "./NewFeature.module.css";
import { tabsConfig } from "./tabConfig";
import bestyLogo from "./assets/bestyLogo.png";
import { Tabs } from "./tabs/tabs";
import { Content } from "./content/content";
import { UilBars } from "@iconscout/react-unicons";

export const NewFeatures = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const navItems = ["Copilot", "Analytics", "Unanswered Messages", "Listings", "Settings"];

  return (
    <div className={styles.newFeature}>
      <div className={styles.titleBar}>
        <div className={`${styles.whiteDot} ${styles.red}`} />
        <div className={`${styles.whiteDot} ${styles.yellow}`} />
        <div className={`${styles.whiteDot} ${styles.green}`} />
      </div>
      <div className={styles.navBar}>
        <img src={bestyLogo} alt={"besty logo"} className={styles.logo} />
        <div className={styles.navItems}>
          {navItems?.map((item, index) => {
            const itemClass = item === "Copilot" ? styles.blueText : "";
            return (
              <span key={index} className={itemClass}>
                {item}
              </span>
            );
          })}
        </div>
        <UilBars size="20" color={"black"} className={styles.hamburger} />
      </div>
      <div className={styles.wrapper}>
        <Tabs tabsConfig={tabsConfig} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Content tabsConfig={tabsConfig} activeTab={activeTab} />
      </div>
    </div>
  );
};
