import styles from "./content.module.css";
import sam from "../assets/sam.png";
import besty from "../assets/besty.png";
import { UilPaperclip, UilMessage } from "@iconscout/react-unicons";
import { useEffect, useState, useRef, useLayoutEffect, useCallback } from "react";

const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

export const Content = ({ tabsConfig, activeTab, autoPlay = true }) => {
  const messagesEndRef = useRef(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const displayMessageWithDelay = (index) => {
    const nextMessage = tabsConfig[activeTab]?.messages[index];

    if (displayedMessages.length && displayedMessages[displayedMessages.length - 1] === nextMessage) {
      return;
    }

    if (nextMessage?.author === "Besty AI") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setDisplayedMessages((prevMessages) => {
          if (prevMessages.includes(nextMessage)) {
            return prevMessages;
          }
          return [...prevMessages, nextMessage];
        });
        setCurrentMessageIndex(index);
      }, 2000);
    } else {
      setDisplayedMessages((prevMessages) => {
        if (prevMessages.includes(nextMessage)) {
          return prevMessages;
        }
        return [...prevMessages, nextMessage];
      });
      setCurrentMessageIndex(index);
    }
  };

  useEffect(() => {
    setDisplayedMessages([]);
    setCurrentMessageIndex(0);
    if (autoPlay && tabsConfig[activeTab]?.messages) {
      displayMessageWithDelay(0);
    }
  }, [activeTab, autoPlay, tabsConfig]);

  useEffect(() => {
    if (tabsConfig[activeTab] && tabsConfig[activeTab]?.messages) {
      if (autoPlay) {
        displayMessageWithDelay(0);
      } else {
        setDisplayedMessages([tabsConfig[activeTab]?.messages[0]]);
        setCurrentMessageIndex(0);
      }
    } else {
      setDisplayedMessages([]);
    }
  }, [tabsConfig, activeTab, autoPlay]);

  useLayoutEffect(() => {
    scrollToBottom();
  }, [displayedMessages]);

  const handlePrevMessage = useCallback(() => {
    setCurrentMessageIndex((prevIndex) => {
      const newIndex = Math.max(prevIndex - 1, 0);
      displayMessageWithDelay(newIndex);
      return newIndex;
    });
  }, [tabsConfig, activeTab]);

  const handleNextMessage = useCallback(() => {
    setCurrentMessageIndex((prevIndex) => {
      const newIndex = Math.min(prevIndex + 1, tabsConfig[activeTab]?.messages.length - 1);
      displayMessageWithDelay(newIndex);
      return newIndex;
    });
  }, [tabsConfig, activeTab]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevMessage();
      } else if (event.key === "ArrowRight") {
        handleNextMessage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrevMessage, handleNextMessage]);

  const messageComponents = displayedMessages.map((message, index) => {
    if (typeof message === "undefined") {
      return null;
    }
    const isHtmlMessage = message?.hasOwnProperty("html");
    const isAttachmentMessage = message?.author === "attachment";
    const isSystemMessage = message?.author === "Besty AI";
    const messageClassName =
      message?.author === "Sam"
        ? styles.samMessage
        : message?.author === "alert"
        ? styles.alertMessage
        : isAttachmentMessage
        ? styles.attachmentMessage
        : isSystemMessage
        ? styles.systemMessage
        : null;
    const authorImage = message?.author === "Sam" ? sam : isSystemMessage ? besty : null;

    if (isAttachmentMessage) {
      return (
        <div key={index} className={`${styles.message} ${messageClassName}`}>
          <div className={styles.nameWrapper}>
            <UilPaperclip size="16" /> {message?.text}
          </div>
        </div>
      );
    } else
      return (
        <div key={index} className={`${styles.message} ${messageClassName} ${isHtmlMessage ? styles.htmlMessage : null}`}>
          {isHtmlMessage ? <div dangerouslySetInnerHTML={createMarkup(message?.html)} /> : <div>{message?.text}</div>}
          {message?.author !== "alert" && (
            <div className={styles.nameWrapper}>
              <img src={authorImage} alt={message?.author} className={styles.authorImage} />
              <span className={styles.messageAuthor}>{message?.author}</span>
            </div>
          )}
        </div>
      );
  });

  return (
    <div className={styles.content}>
      <div className={styles.messagesWrapper}>
        {messageComponents}
        {isLoading && (
          <div className={styles.loading}>
            <img src={besty} alt={"besty loading"} className={styles.loadingImage} />
            <div className={styles.typing}>
              <span class={`${styles.circle} ${styles.scaling}`} />
              <span class={`${styles.circle} ${styles.scaling}`} />
              <span class={`${styles.circle} ${styles.scaling}`} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputWrapper}>
        <span>Ask me anything...</span>
        <UilMessage size="18" />
      </div>
    </div>
  );
};
