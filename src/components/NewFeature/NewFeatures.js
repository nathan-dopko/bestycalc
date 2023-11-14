import React, { useState } from "react";
import styles from "./NewFeature.module.css";
import { UilMessage } from "@iconscout/react-unicons";
import { tabsConfig } from "./tabConfig";
import sam from "./assets/sam.png";
import besty from "./assets/besty.png";
import bestyLogo from "./assets/bestyLogo.png";

export const NewFeatures = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  const currentTabContent = tabsConfig[activeTab].messages.map((message, index) => {
    const isHtmlMessage = message.hasOwnProperty("html");
    const authorImage = message.author === "Sam" ? sam : besty;

    return (
      <div key={index} className={`${styles.message} ${message.author === "Sam" ? styles.samMessage : message.author === "alert" ? styles.alertMessage : styles.systemMessage}`}>
        {isHtmlMessage ? <div dangerouslySetInnerHTML={createMarkup(message.html)} /> : <div>{message.text}</div>}
        {message.author !== "alert" && (
          <div className={styles.nameWrapper}>
            <img src={authorImage} alt={message.author} className={styles.authorImage} />
            <span className={styles.messageAuthor}>{message.author}</span>
          </div>
        )}
      </div>
    );
  });

  const navItems = ["Analytics", "Unanswered Messages", "Listings", "Settings"];

  return (
    <div className={styles.newFeature}>
      <div className={styles.titleBar}>
        <img src={bestyLogo} alt={"besty logo"} className={styles.logo} />
        <div className={styles.navItems}>
          {navItems?.map((item) => {
            return <span>{item}</span>;
          })}
        </div>
        <div />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.tabs}>
          {Object.entries(tabsConfig).map(([key, { title }]) => (
            <div className={`${styles.tab} ${key === activeTab ? styles.activeTab : ""}`} key={key} onClick={() => setActiveTab(key)}>
              {title}
            </div>
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.messagesWrapper}>{currentTabContent}</div>
          <div className={styles.inputWrapper}>
            <span>Ask me anything...</span>
            <UilMessage size="18" />
          </div>
        </div>
      </div>
    </div>
  );
};
