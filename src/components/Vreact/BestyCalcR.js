import React, { useState, useEffect } from "react";
import "./styles.css";
import logo from "./logo.png";

export const BestyCalcR = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [listings, setListings] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [listingBreakdown, setListingBreakdown] = useState({});
  const [avgCost, setAvgCost] = useState(null);

  const pricingData = [
    { from: 1, to: 10, cost: "$12", price: 12 },
    { from: 11, to: 20, cost: "$10", price: 10 },
    { from: 21, to: 50, cost: "$8", price: 8 },
    { from: 51, to: 100, cost: "$7", price: 7 },
    { from: 101, to: 200, cost: "$6", price: 6 },
    { from: 201, to: 400, cost: "$5", price: 5 },
    { from: 401, to: 500, cost: "$4", price: 4 },
    { from: 500, to: "", cost: "Contact Us", price: null },
  ];

  const calculateCostAndBreakdown = () => {
    if (listings === null) {
      setTotalCost(null);
      setListingBreakdown({});
      setAvgCost(null);
      return;
    }

    let cost = 0;
    let remainingListings = listings;
    let breakdown = {};

    for (let i = 0; i < pricingData.length; i++) {
      const { from, to, price } = pricingData[i];
      const range = to ? to - from + 1 : remainingListings;

      if (remainingListings > 0) {
        const consumed = Math.min(range, remainingListings);
        cost += consumed * price;
        breakdown[from] = consumed;
        remainingListings -= consumed;
      }
    }
    setTotalCost(remainingListings > 0 ? "Contact Us" : isYearly ? cost * 0.85 : cost);
    setListingBreakdown(breakdown);
    if (listings > 0) {
      setAvgCost(isYearly ? (cost / listings) * 0.85 : cost / listings);
    }
  };

  useEffect(() => {
    calculateCostAndBreakdown();
  }, [isYearly, listings]);

  return (
    <div className="calculatorWrapper">
      <div className="logoWrapper">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="headerWrapper">
        <div className="title">Pricing Calculator</div>
        <button onClick={() => setIsYearly(!isYearly)} className="yearlySwapBtn">
          {isYearly ? "Switch to Monthly" : "Switch to Yearly"}
        </button>
      </div>
      <div className="inputWrapper">
        <input
          type="number"
          value={listings === null ? "" : listings}
          onChange={(e) => setListings(e.target.value === "" ? null : Number(e.target.value))}
          className="listingInput"
          placeholder="Enter Listing Count"
        />
      </div>
      <table className="pricingTable">
        <thead>
          <tr>
            <th>Listings</th>
            <th>Cost/Listing</th>
            <th>My Listings</th>
            <th>My Cost</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((row, index) => (
            <tr key={index}>
              <td className="tableData">{row.from === 500 ? "500+" : `${row.from} - ${row.to}`}</td>
              <td className="tableData">{row.cost}</td>
              <td className="tableData">{listings > 500 && row.from === 500 ? "Contact Us" : listingBreakdown[row.from] || "-"}</td>
              <td className="tableData">{listings > 500 && row.from === 500 ? "Contact Us" : listingBreakdown[row.from] ? `$${listingBreakdown[row.from] * row.price}` : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="contentWrapper">
        {listings > 500 ? (
          <a className="contactUsBtn" href="https://calendly.com/samfrombloom/intro-to-besty-ai" target="_blank" rel="noreferrer">
            Contact Us
          </a>
        ) : (
          <div className="avgListings">Avg Listing Cost: ${avgCost ? (listings > 500 ? "Contact Us" : `${avgCost.toFixed(2)}`) : "0"}</div>
        )}
        {listings > 500 ? null : (
          <div className="avgListings">
            Monthly Cost: {totalCost ? (listings > 500 ? "Contact Us" : totalCost === "Contact Us" ? totalCost : `$${totalCost.toLocaleString()}`) : "$0"}
            {isYearly ? <div className="discountLabel">15% off Yearly</div> : null}
          </div>
        )}
      </div>
      <a className="freeTrialButton" href="http://app.getbesty.ai/signup" target="_blank" rel="noreferrer">
        Start 14-day free trial
      </a>
    </div>
  );
};
