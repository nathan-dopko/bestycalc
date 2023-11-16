export const tabsConfig = {
  tab1: {
    title: "Construction update",
    messages: [
      {
        html: `Please message all the guests staying in units #405, #204 and the 2BR Penthouse between Jan 5 - 15th 2024, letting them know that we’ve just been informed that the building will be doing a renovation in the lobby.
        <br />
        <br />
        They’re going to be working from 9am - 5pm from Mon-Fri and have assured us the noise will not be an issue, but that we just wanted to give them a heads up so there’s no surprises during their stay and to let us know if it’s an issue during their stay.`,
        author: "Sam",
      },
      {
        text: `You got it, here’s the draft:`,
        author: "Besty AI",
      },
      {
        html: `
        Hello [Guest’s Name],
        <br />
        <br />
        I hope this message finds you well!
        <br />
        <br />
        I wanted to give you a quick heads-up about some upcoming renovations in our building’s lobby.
        <br />
        <br />
        From Monday to Friday, between 9 AM and 5 PM during your stay, there will be some work going on. We’ve been assured that the noise levels will be minimal and shouldn’t disrupt your stay. However, we believe in transparency and wanted to inform you in advance to avoid any surprises.
        <br />
        <br />
        Your comfort and satisfaction are our top priorities, so please don’t hesitate to reach out if you find the renovations to be an inconvenience or if you have any other concerns during your stay.
        `,
        author: "Besty AI",
      },
      {
        text: `Make it brief`,
        author: "Sam",
      },
      {
        html: `
        Hello [Guest’s Name],
        <br />
        <br />
        Just a quick note: there will be renovation work in the building’s lobby, Mon-Fri from 9 AM to 5 PM during your stay. We’re told noise won’t be an issue, but wanted to keep you informed to avoid any surprises. If you encounter any concerns during your stay, please let us know.
        <br />
        <br />
        Thanks for your understanding!
        `,
        author: "Besty AI",
      },
      {
        text: `Okay send it`,
        author: "Sam",
      },
      { text: "ACTION COMPLETE: Message sent to 12 guests staying in units #405, #204 and the 2BR Penthouse.", author: "alert" },
      {
        text: `Done!`,
        author: "Besty AI",
      },
    ],
  },
  tab2: {
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
              <strong>Key Fob Availability:</strong> Provide more than one key fob for the back door, especially for groups of 3-4 people.
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
  tab3: {
    title: "Quarterly owner update",
    messages: [
      {
        html: `
        Here’s a list of my 2 owners and their listings. Draft me an email that summarizes their occupancy and compares it to last quarter, highlight a notable review from each property, and give a brief outlook on next quarter.
        <br />
        <br />
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
  tab4: {
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
              Event: Elara Heights Jazz Festival, Nov 10-12<br />
              Highlight: Celebrate the city’s rich jazz history with live performances, food stalls, and artist workshops.
            <br />
            <br />
           <strong>Spacious Suburb Family Home</strong><br/>
              Event: Maplewood Autumn Fair, Nov 5-7<br/>
              Highlight: A family-friendly event featuring local crafts, pumpkin carving contests, and hayrides.
            <br />
            <br />
            <strong>Beach Condo: Ocean Breeze</strong><br/>
              Event: Seabright Food & Wine Festival, Nov 19-21<br/>
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
     <br />
     <br />
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
             <br />
        `,
        author: "Besty AI",
      },
      {
        text: `Would you like me to proceed with adding the above text to each listing’s description?`,
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
        text: `Great, done!`,
        author: "Besty AI",
      },
    ],
  },
  tab5: {
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
          <br />
          <br />
          <div>
            <strong>Template 1:</strong>
            <br />
            <br />
            Dear (Guest First Name),
            <br />
            <br />
            We hope you’ve been doing wonderfully since your last visit! As autumn approaches, we’d love to welcome you back. Book your October stay with us and enjoy a special 10% discount. Re-experience the magic or discover new adventures. Just use code OCT10 when booking.
            <br />
            <br />
            Warm regards,
            <br />
            <br />
            Sam
          </div>
          <br />
          <div>
            <strong>Template 2:</strong>
            <br />
            <br />
            Hi (Guest First Name),
            <br />
            <br />
            all is around the corner, and so is your chance to revisit us with a 10% discount! Whether it’s the colorful leaves or cozy vibes you’re after, October at our place is not to be missed.
            <br />
            <br />
            Best,
            <br />
            <br />
            Sam
          </div>
          <br />
          <div>
            <strong>Template 3:</strong>
            <br />
            <br />
            Hello (Guest First Name),
            <br />
            <br />
            Remember the good times you had here? Let’s make more this October! As a thank you for being a fantastic guest, we’re offering you 10% off for your next stay. Can’t wait to see you again!
            <br />
            <br />
            Cheers,
            <br />
            <br />
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
  tab6: {
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
  tab7: {
    title: "Create listing description",
    messages: [
      {
        text: `Here’s a folder of all the photos for a new listing I’m launching. Write me a brief listing description that includes selling points about what makes the property special.`,
        author: "Sam",
      },
      {
        text: `New listing photos.zip`,
        author: "attachment",
      },
      {
        html: `
        Here you go!
        <br />
        <br />
        <strong>Title:</strong> 🌟 Chic 2-Bed Urban Condo: Prime Location & 5-Star Amenities 🌟
        <br />
        <br />
        Experience luxury in our stylish 2-bedroom condo, perfectly situated in the city’s heart. Our space combines comfort, elegance, and convenience for an unforgettable stay.
        <br />
        <br />
        <strong>Highlights:</strong>
          <ul>
            <li><strong>Elegant Bedrooms:</strong> King and queen beds, premium linens, en-suite in master.</li>
            <li><strong>Fully-Equipped Kitchen:</strong> High-end appliances and cookware.</li>
            <li><strong>Comfortable Living Space:</strong>Sofa, flat-screen TV, balcony with city views.</li>
            <li><strong>Exclusive Amenities:</strong>Fitness center, heated pool, rooftop terrace, private parking.</li>
            <li><strong>Smart Features:</strong>High-speed Wi-Fi, digital assistant, keyless entry.</li>
            <li><strong>Great Location:</strong>Near dining, shopping, attractions, and public transport.</li>
          </ul>
          <strong>Extras:</strong>
          <ul>
            <li>Welcome basket, personalized guidebook, in-unit laundry, 24/7 guest support.</li>
          </ul>
          <br />
          <strong>Ideal For:</strong>
          <br />
          Business travelers, couples, and families seeking a luxurious city escape.
        `,
        author: "Besty AI",
      },
    ],
  },
};
