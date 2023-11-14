import React, { useState } from "react";
import styles from "./NewFeature.module.css";
import { UilMessage } from "@iconscout/react-unicons";
import { tabsConfig } from "./tabConfig";

export const NewFeatures = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  const currentTabContent = tabsConfig[activeTab].messages.map((message, index) => {
    const isHtmlMessage = message.hasOwnProperty("html");

    return (
      <div key={index} className={`${styles.message} ${message.author === "sam" ? styles.samMessage : styles.systemMessage}`}>
        {isHtmlMessage ? <div dangerouslySetInnerHTML={createMarkup(message.html)} /> : <div>{message.text}</div>}
        <span className={styles.messageAuthor}>{message.author}</span>
      </div>
    );
  });

  const currentThreadTitle = tabsConfig[activeTab].threadTitle;

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {Object.entries(tabsConfig).map(([key, { title }]) => (
          <div className={`${styles.tab} ${key === activeTab ? styles.activeTab : ""}`} key={key} onClick={() => setActiveTab(key)}>
            {title}
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{currentThreadTitle}</div>
        <div className={styles.messagesWrapper}>{currentTabContent}</div>
        <div className={styles.inputWrapper}>
          <span>Ask me anything...</span>
          <UilMessage size="18" />
        </div>
      </div>
    </div>
  );
};
