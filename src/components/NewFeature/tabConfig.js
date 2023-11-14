export const tabsConfig = {
  tab1: {
    title: "Summarize Airbnb reviews",
    messages: [
      { text: "Can you look through all my reviews and summarize what I need to improve on Airbnb? Look at private feedback and public reviews.", author: "Sam" },
      { text: "Okay, which listing?", author: "Besty AI" },
      { text: "Let’s start with Bridgeview #2", author: "Sam" },
      {
        html: `
            Okay, Bridgeview #2 has 79 Airbnb reviews with an average overall rating of 4.93.I read through all 79 public reviews and 29 private feedback comments that were left as well. Here’s what I found:
            <br />
            <br />
              <strong>Balcony Door Lock:</strong> Ensure the balcony door can be locked properly.
              <br />
              <br />
              <strong>Guest Guidebook Visibility:</strong> Make the guest guidebook more noticeable,a note or or label.
              <br />
              <br />
              <strong>Hallway Runner:</strong> Consider removing or securing the hallway runner to prevent tripping.
              <br />
              <br />
              <strong>Bathroom Upgrades:</strong> Add a handheld shower head, a full-sized mirror, and conduct some maintenance on the bathroom door.
              <br />
              <br />
              <strong>Blinds Maintenance:</strong> Check the blinds in the main bedroom to ensure they are functioning correctly, as guests had to fix them.
              <br />
              <br />
              <strong>Key Fob Availability:</strong> PProvide more than one key fob for the back door, especially for groups of 3-4 people.
          `,
        author: "Besty AI",
      },
      {
        text: "I noticed you haven’t responded to any of the 79 guests reviews, this can help improve your listing visibility and gives more of a personalized touch. Would you like me to write back to each one thanking them for the detailed feedback and for their time at your condo?",
        author: "Besty AI",
      },
      { text: "Yes", author: "Sam" },
      { text: "ACTION COMPLETED: RESPONDED TO 79 AIRBNB GUEST REVIEWS.", author: "alert" },
      {
        text: "Okay, done. Just responded to all 79 guests. Do you want me to create a reoccurring task to do this automatically each time a review comes in? If so, how often do you want me to do this?",
        author: "Besty AI",
      },
      { text: "Yes, weekly.", author: "Sam" },
      { text: "ACTION COMPLETE: WEEKLY RECURRING TASK CREATED.", author: "alert" },
      {
        html: "Great. Just created a weekly task called “<strong>Give personalized response to guest review.</strong>” You can check in on this task status anytime you want via the Besty dashboard.",
        author: "Besty AI",
      },
    ],
  },
  tab2: {
    title: "Quarterly owner update",
    messages: [
      {
        html: `
                Hey, here’s a list of each of my 2 owners and their listings. Each quarter, I’d like you to send me a recap email draft that summarizes their occupancy (as well as month-over-month occupancy comparison), highlights the best review from each property, and gives a brief outlook on how the following quarter is looking: 
                 Evelyn Rivera
                    <ul>
                        <li>Cozy Countryside Cottage: A Rustic Getaway</li>
                        <li>The Urban Oasis: Chic Loft in Downtown Vista</li>
                        <li>Lakeside Serenity: Modern Cabin with Stunning Views</li>
                    </ul>
                   Marcus Yeung
                    <ul>
                        <li>The Hilltop Haven: Panoramic City Views</li>
                        <li>Seaside Escape: Beachfront Condo with Balcony</li>
                    </ul>
              `,
        author: "Sam",
      },
      {
        text: "You bet, here you go:",
        author: "Besty AI",
      },
      {
        html: `
          <strong>Dear Evelyn,</strong>
          I hope this email finds you well. Here's your quarterly update for your Airbnb listings:
          <ol>
            <li><strong>Cozy Countryside Cottage:</strong><br/>
              Occupancy: 85% (up from 75% last quarter)<br/>
              Highlight Review: "A charming, serene escape. The cottage felt like a storybook retreat."
            </li>
            <li><strong>The Urban Oasis:</strong><br/>
              Occupancy: 92% (consistent with 92% last quarter)<br/>
              Highlight Review: "Stunning loft with exceptional city views. A true urban gem."
            </li>
            <li><strong>Lakeside Serenity:</strong><br/>
              Occupancy: 78% (down from 82% last quarter)<br/>
              Highlight Review: "The perfect blend of modern amenities and natural beauty."
            </li>
          </ol>
          Next Quarter Outlook: Bookings for the upcoming quarter look promising, particularly for The Urban Oasis and Hidden Gem Bungalow. We'll continue to leverage their popularity while boosting visibility for Lakeside Serenity.


        `,
        author: "Besty AI",
      },
      {
        html: `
          Hello Marcus,
          Here's the latest update on your Airbnb listings for this quarter:
          <ul>
            <li><strong>The Hilltop Haven:</strong> Occupancy at 92% (previously 85%). The panoramic views continue to amaze guests. The next quarter is looking even busier with advanced bookings.</li>
            <li><strong>Seaside Escape:</strong> A slight dip in occupancy to 78% from 82%. Guests praised the "stunning beachfront views." Expecting a rebound next quarter with seasonal beachgoers.</li>
          </ul>
          Your properties are performing well, with positive trends expected to continue. Looking forward to another successful quarter!
        `,
        author: "Besty AI",
      },
      {
        text: "Great. Remember for next time that these owners are associated with these listings. Also, make a reoccurring job each quarter (Jan 1, April 1, July 1, Oct 1) to write me a performance draft.",
        author: "Sam",
      },
      {
        text: "ACTION COMPLETE: QUARTERLY TASK CREATED",
        author: "alert",
      },
      {
        html: "Will do. Just created a quarterly task called “<strong>Generate quarterly report email draft.</strong>” You can check in on this task status via the Besty task dashboard.",
        author: "Besty AI",
      },
    ],
  },
  tab3: {
    title: "Increase listing conversion",
    messages: [
      {
        text: "Pull up all my listing titles",
        author: "Sam",
      },
      {
        html: `
      You have 3 listings, here are the titles on Airbnb & VRBO:
          <ul>
            <li>Small City Apartment</li>
            <li>Large House in the Suburbs</li>
            <li>Medium-Sized Condo Near the Beach</li>
          </ul>
        `,
        author: "Besty AI",
      },
      {
        text: "Great, improve them all to make them sound more marketable.",
        author: "Sam",
      },
      {
        html: `
         Here you go, but keep in mind Airbnb has a 50-character limit on titles, so I re-wrote them respecting this constraint:
          <ul>
            <li>"Urban Gem: Chic City Studio"</li>
            <li>"Spacious Suburb Family Home"</li>
            <li>"Beach Condo: Ocean Breeze"</li>
          </ul>
         Would you like me to update your listings with these new titles?
        `,
        author: "Besty AI",
      },

      {
        text: "Yes",
        author: "Sam",
      },
      {
        text: "ACTION COMPLETE: Listing titles updated.",
        author: "alert",
      },
      {
        text: `Done!`,
        author: "Besty AI",
      },
      {
        text: "Okay, now look within a 3 mile radius of each listing and search the web for an upcoming tourist attraction for the month of November.",
        author: "Sam",
      },
      {
        html: `
            <strong>Urban Gem: Chic City Studio</strong><br/>
              Event: Elara Heights Jazz Festival, November 10-12<br/>
              Highlight: Celebrate the city's rich jazz history with live performances, food stalls, and artist workshops.
            <br />
            <br />
           <strong>Spacious Suburb Family Home</strong><br/>
              Event: Maplewood Autumn Fair, November 5-7<br/>
              Highlight: A family-friendly event featuring local crafts, pumpkin carving contests, and hayrides.
            <br />
            <br />
            <strong>Beach Condo: Ocean Breeze</strong><br/>
              Event: Seabright Food & Wine Festival, November 19-21<br/>
              Highlight: Indulge in gourmet coastal cuisine and fine wines from renowned local vineyards.
        `,
        author: "Besty AI",
      },
      {
        text: "Reword these each into one line summaries, then add them to the top line of each listing on Airbnb, then remove them once the dates are no longer available for that listing and the event.",
        author: "Sam",
      },
      {
        html: `
     Okay sure thing, here’s what I’ll add to the top of the description of each listing:
            <strong>Urban Gem: Chic City Studio:</strong>
            <br/>
            Enjoy the Elara Heights Jazz Festival (Nov 10-12) with live jazz, food stalls, and workshops, just a short walk away.
            <br />
            <br />
           <strong>Spacious Suburb Family Home:</strong>
           <br/>
           Maplewood Autumn Fair (Nov 5-7) offers family fun with crafts, pumpkin carving, and hayrides, a quick drive from home.
            <br />
            <br />
            <strong>Beach Condo: Ocean Breeze: </strong>
            <br/>
            Savor the Seabright Food & Wine Festival (Nov 19-21) with gourmet cuisine and fine wines, steps from the beach.
             <br />
             Are you sure you want me to add this text to each listing?
        `,
        author: "Besty AI",
      },
      {
        text: "Yes, and remember to remove it once the date has passed.",
        author: "Sam",
      },
      {
        text: "ACTION COMPLETE: Listing descriptions updated",
        author: "alert",
      },
      {
        text: "ACTION COMPLETE: Task created to remove time-sensitive descriptions",
        author: "alert",
      },
      {
        html: `Great, done! Created a one-time task called “<strong>time-sensitive promotional events</strong>” in your Besty Dashboard if you want to check back up on this at any time.`,
        author: "Besty AI",
      },
    ],
  },
  tab4: {
    title: "Retarget past guests",
    messages: [
      {
        text: "How many guests booked via our direct booking site last October?",
        author: "Sam",
      },
      {
        text: "You had 238 reservations last October from your direct booking website across all 142 listings.",
        author: "Besty AI",
      },
      {
        text: "Okay, please send them all an email with whichever email we have on file, offering to welcome them back to stay with us for a 10% discount if they want to book again for this upcoming October. Give me a few email template options and I’ll approve one that you can send to everyone:",
        author: "Sam",
      },
      {
        html: `
          Here’s 3 templates, let me know which one you approve or if you have any changes:
          <div>
            <strong>Template 1:</strong>
            Subject: Miss Us? Special 10% Off for Your October Stay, (Guest First Name)!
            Dear (Guest First Name),
            We hope you’ve been doing wonderfully since your last visit! As autumn approaches, we’d love to welcome you back. Book your October stay with us and enjoy a special 10% discount. Re-experience the magic or discover new adventures. Just use code OCT10 when booking.
            Warm regards,
            Sam
          </div>
          <div>
            <strong>Template 2:</strong>
            Subject: 🍂 October Awaits, (Guest First Name)! Enjoy 10% Off on Your Next Stay
            Hi (Guest First Name),
            Fall is around the corner, and so is your chance to revisit us with a 10% discount! Whether it’s the colorful leaves or cozy vibes you’re after, October at our place is not to be missed.
            Best,
            Sam
          </div>
          <div>
            <strong>Template 3:</strong>
            Hello (Guest First Name),
            Remember the good times you had here? Let’s make more this October! As a thank you for being a fantastic guest, we’re offering you 10% off for your next stay. Can’t wait to see you again!
            Cheers,
            Sam
          </div>
        `,
        author: "Besty AI",
      },
      {
        text: `Template 3 is good to go. Please proceed:`,
        author: "Sam",
      },
      {
        text: `ACTION COMPLETE: Emails sent to guests.`,
        author: "alert",
      },
      {
        text: `Done, just emailed all 238 guests from last October using the email you had on file in the PMS.`,
        author: "Besty AI",
      },
    ],
  },
  tab5: {
    title: "Update amenities",
    messages: [
      {
        text: `I just added EV chargers to all my listings in LA. Can you please add this amenity to all my LA listings?`,
        author: "Sam",
      },
      {
        html: `
         Sure thing. Just to confirm, you have 6 properties in the greater LA area. Would you like me to add EV Charger as an amenity to each of the following properties?
          <ul>
            <li>Sunset Boulevard Chic Studio</li>
            <li>Venice Beach Dream Condo</li>
            <li>Hollywood Hills Luxury Retreat</li>
            <li>Santa Monica Seaside Haven</li>
            <li>Downtown LA Urban Loft</li>
            <li>Malibu Coastal Escape</li>
          </ul>
        `,
        author: "Besty AI",
      },
      {
        text: `Yes`,
        author: "Sam",
      },
      {
        text: `ACTION COMPLETE: Amenities updated`,
        author: "alert",
      },
      {
        text: `Done!`,
        author: "Besty AI",
      },
    ],
  },
};
