import styles from "./content.module.css";
import sam from "../assets/sam.png";
import besty from "../assets/besty.png";
import { UilPaperclip } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

export const Content = ({ tabsConfig, activeTab }) => {
  const currentTabContent = tabsConfig[activeTab].messages.map((message, index) => {
    const isHtmlMessage = message.hasOwnProperty("html");
    const isAttachmentMessage = message.author === "attachment";
    const messageClassName =
      message.author === "Sam" ? styles.samMessage : message.author === "alert" ? styles.alertMessage : isAttachmentMessage ? styles.attachmentMessage : styles.systemMessage;
    const authorImage = message.author === "Sam" ? sam : besty;

    if (isAttachmentMessage) {
      return (
        <div key={index} className={`${styles.message} ${messageClassName}`}>
          <div className={styles.nameWrapper}>
            <UilPaperclip size="16" /> {message.text}
          </div>
        </div>
      );
    } else
      return (
        <div key={index} className={`${styles.message} ${messageClassName} ${isHtmlMessage ? styles.htmlMessage : null}`}>
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

  return (
    <div className={styles.content}>
      <div className={styles.messagesWrapper}>{currentTabContent}</div>
      <div className={styles.inputWrapper}>
        <span>Ask me anything...</span>
        <UilMessage size="18" />
      </div>
    </div>
  );
};
