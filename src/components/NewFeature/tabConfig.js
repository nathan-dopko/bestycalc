export const tabsConfig = {
  tab1: {
    title: "Tab 1",
    threadTitle: "Summarize my airbnb reviews",
    messages: [
      { text: "Can you look through all my reviews and summarize what I need to improve on Airbnb? Look at private feedback and public reviews.", author: "sam" },
      { text: "Okay, which listing?", author: "Besty AI" },
      { text: "Let’s start with Bridgeview #2", author: "sam" },
      {
        html: `
            <p>Okay, Bridgeview #2 has 79 Airbnb reviews with an average overall rating of 4.93. I read through all 79 public reviews, and 29 private feedback that was left as well. Here’s what I found:</p>
            <ul>
              <li>Balcony Door Lock: Ensure the balcony door can be locked properly, or provide clear instructions on how to do so.</li>
              <li>Guest Guidebook Visibility: Make the guest guidebook more noticeable, perhaps with a note or label, so guests are aware of its existence and can make use of it from the beginning of their stay.</li>
              <li>Hallway Runner: Consider removing or securing the hallway runner to prevent tripping, sliding, or slipping hazards.</li>
              <li>Bathroom Upgrades: Add a handheld shower head, a full-sized mirror, and conduct some maintenance on the bathroom door.</li>
              <li>Blinds Maintenance: Check the blinds in the main bedroom to ensure they are functioning correctly, as guests had to fix them.</li>
              <li>Key Fob Availability: Provide more than one key fob for the back door, especially for groups of 3-4 people. Also, be responsive to requests for additional fobs.</li>
            </ul>
            <p>I noticed you haven’t responded to any of the 79 guests reviews, this can help improve your listing visibility and gives more of a personalized touch. Would you like me to write back to each one thanking them for the detailed feedback and for their time at your condo?</p>
          `,
        author: "Besty AI",
      },
      { text: "Yes", author: "sam" },
      {
        text: "Okay, done. Just responded to all 79 guests. Do you want me to create a reoccurring task to do this automatically each time a review comes in? If so, how often do you want me to do this?",
        author: "Besty AI",
      },
      { text: "Yes, weekly.", author: "sam" },
      {
        text: "Great. Just created a weekly task called “Give personalized response to guest review.” You can check in on this task status anytime you want via the Besty dashboard.",
        author: "Besty AI",
      },
    ],
  },
  tab2: {
    title: "Tab 2",
    threadTitle: "test",
    messages: [
      { text: "Done! Just updated the titles across all OTAs", author: "Besty AI" },
      { text: "Great, send me the Airbnb URLs so I can take a look", author: "sam" },
    ],
  },
  tab3: {
    title: "Tab 3",
    threadTitle: "testing",
    messages: [
      { text: "lol", author: "Besty AI" },
      { text: "wowowowow", author: "sam" },
    ],
  },
};
