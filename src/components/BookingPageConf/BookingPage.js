import React from "react";
import styles from "./BookingPage.module.css";
import Glen from "./corporate photo glen.png";
import Sam from "./corporate photo sam.png";
import Ed from "./corporate photo ed.png";

export const BookingPageConf = () => {
  const people = [
    {
      name: "Sam Dundas",
      link: "https://meetings.hubspot.com/sam-dundas/besty-ai-demo",
      img: Sam,
    },
    {
      name: "Edward Shorter",
      link: "https://meetings.hubspot.com/edward206/besty-ai-demo",
      img: Ed,
    },
    {
      name: "Glen McClintock",
      link: "https://meetings.hubspot.com/glen-mcclintock/besty-ai-demo",
      img: Glen,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.bookingPage}>
        <img src="https://www.hostfully.com/wp-content/uploads/2022/09/besty-logo-better-space-1.png" alt="FAVR Logo" className={styles.logo} />
        <div className={styles.bookingTitle}>Book a Demo</div>
        <div className={styles.personWrapper}>
          {people.map((person) => (
            <a href={person.link} target="_blank" rel="noreferrer" className={styles.person} key={person.name}>
              <img src={person.img} alt={person.name} className={styles.personImage} />
              <div className={styles.personName}>{person.name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
