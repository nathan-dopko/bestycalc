import React, { useState } from "react";
import styles from "./BookingPage.module.css"; // Using modular styles

export const BookingPage = () => {
  const [formData, setFormData] = useState({
    pms: "",
    listings: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { listings } = formData;
    let hubspotLink = "";

    if (parseInt(listings) < 30) {
      hubspotLink = "https://meetings.hubspot.com/glen-mcclintock/besty-ai-demo";
    } else if (parseInt(listings) >= 50) {
      hubspotLink = "https://meetings.hubspot.com/nathan-dopko/besty-ai-demo";
    } else {
      hubspotLink = "https://meetings.hubspot.com/sam-dundas/besty-ai-demo";
    }

    window.location.href = hubspotLink;
  };

  return (
    <div className={styles.bookingPage}>
      <div className={styles.bookingTitle}>Book a Demo</div>
      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <div className={styles.formItem}>
          <label htmlFor="pms">PMS</label>
          <input type="text" id="pms" value={formData.pms} onChange={handleChange} />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="listings">Number of Listings</label>
          <input type="number" id="listings" value={formData.listings} onChange={handleChange} />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
