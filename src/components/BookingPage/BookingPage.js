import React, { useState } from "react";
import styles from "./BookingPage.module.css";

export const BookingPage = () => {
  const [listings, setListings] = useState("");

  const handleChange = (e) => {
    setListings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hubspotLink = "";

    if (parseInt(listings) < 30) {
      hubspotLink = "https://meetings.hubspot.com/glen-mcclintock/besty-ai-demo";
    } else if (parseInt(listings) >= 31 && parseInt(listings) <= 99) {
      hubspotLink = "https://meetings.hubspot.com/nathan-dopko/besty-ai-demo";
    } else if (parseInt(listings) >= 100) {
      hubspotLink = "https://meetings.hubspot.com/sam-dundas/besty-ai-demo";
    }

    window.location.href = hubspotLink;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bookingPage}>
        <img src="https://www.hostfully.com/wp-content/uploads/2022/09/besty-logo-better-space-1.png" alt="FAVR Logo" className={styles.logo} />
        {/* <div className={styles.subtitle}>FAVR Xtravaganza</div> */}
        <div className={styles.bookingTitle}>Book a demo with Besty AI</div>
        <p className={styles.description}>Enter how many listings you have so we can set you up with the best account manager.</p>
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <div className={styles.formItem}>
            <label htmlFor="listings">Number of Listings</label>
            <input type="number" id="listings" value={listings} onChange={handleChange} placeholder="Enter number of listings" min="1" required />
          </div>
          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
