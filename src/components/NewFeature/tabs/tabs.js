import styles from "./tabs.module.css";

export const Tabs = ({ tabsConfig, activeTab, setActiveTab }) => {
  return (
    <div className={styles.tabWrapper}>
      <div className={styles.tabs}>
        {Object.entries(tabsConfig).map(([key, { title }], index) => (
          <>
            <div className={`${styles.tab} ${key === activeTab ? styles.activeTab : ""}`} key={key} onClick={() => setActiveTab(key)}>
              {title}
            </div>
            {index !== Object.entries(tabsConfig).length - 1 && <div className={styles.tabDivider} />}
          </>
        ))}
      </div>
    </div>
  );
};
