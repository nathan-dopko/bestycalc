import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './BookingPage.module.css';

export const BookingPage = () => {
  const [listings, setListings] = useState('');
  const [searchParams] = useSearchParams();
  const showThanks = searchParams.get('thanks') == 'true';

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
    <div
      style={{
        textAlign: 'center',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {showThanks && (
        <>
          <h2 style={{ color: '#333', marginBottom: '5px' }}>Thank you for signing up to Besty!</h2>
          <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>
            We're excited to announce Besty V2! Sign up for a demo below to see what's new:
          </p>
        </>
      )}
      <div
        className={styles.wrapper}
        style={{ padding: '20px', textAlign: 'center', minHeight: 'auto', position: 'relative' }}
      >
        <div className={styles.bookingPage}>
          <div className={styles.bookingTitle}>Book a demo</div>
          <p className={styles.description}>Please enter the number of listings you operate.</p>
          <form className={styles.bookingForm} onSubmit={handleSubmit}>
            <input
              type="number"
              id="listings"
              value={listings}
              onChange={handleChange}
              placeholder="Number of listings"
              min="1"
              required
            />
            <button className={styles.submitBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
