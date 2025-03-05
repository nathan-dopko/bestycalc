import React, { useState } from 'react';
import styles from './BookingPage.module.css';

export const BookingPage = () => {
  const [listings, setListings] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListings(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hubspotLink = '';

    const listingCount = parseInt(listings);

    if (listingCount <= 8) {
      hubspotLink = 'https://us06web.zoom.us/webinar/register/WN_lejjIQsUT1GIrFSt6WK0nQ#/registration';
    } else if (listingCount <= 30) {
      hubspotLink = 'https://meetings.hubspot.com/nathan-dopko/besty-ai-demo';
    } else if (listingCount <= 99) {
      hubspotLink = 'https://meetings.hubspot.com/glen-mcclintock/besty-ai-demo';
    } else {
      hubspotLink = 'https://meetings.hubspot.com/sam-dundas/besty-ai-demo';
    }

    window.location.href = hubspotLink;
  };

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '15px', color: '#333' }}>Thank you for signing up to Besty!</h2>
        <p style={{ fontSize: '16px', color: '#555' }}>To setup your account, please book a demo below:</p>
        <div className={styles.wrapper}>
          <div className={styles.bookingPage}>
            <img
              src="https://www.hostfully.com/wp-content/uploads/2022/09/besty-logo-better-space-1.png"
              alt="Besty AI Logo"
              className={styles.logo}
            />
            <div className={styles.bookingTitle}>Book a demo</div>
            <p className={styles.description}>Please enter the number of listings you operate.</p>
            <form className={styles.bookingForm} onSubmit={handleSubmit}>
              <div className={styles.formItem}>
                <label htmlFor="listings">Number of Listings</label>
                <input
                  type="number"
                  id="listings"
                  value={listings}
                  onChange={handleChange}
                  placeholder="Enter number of listings"
                  min="1"
                  required
                />
              </div>
              <button className={styles.submitBtn} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
