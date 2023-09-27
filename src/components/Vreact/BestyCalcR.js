import React, { useState, useEffect } from "react";
import "./styles.css";

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
    setTotalCost(remainingListings > 0 ? "Contact Us" : isYearly ? cost * 12 : cost);
    setListingBreakdown(breakdown);
    if (listings > 0) {
      setAvgCost(isYearly ? (cost / listings) * 12 : cost / listings);
    }
  };

  useEffect(() => {
    calculateCostAndBreakdown();
  }, [isYearly, listings]);

  return (
    <div className="calculatorWrapper">
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
          placeholder="Enter listing count"
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
              <td>{row.from === 500 ? "500+" : `${row.from} - ${row.to}`}</td>
              <td>{row.cost}</td>
              <td>{listings > 500 && row.from === 500 ? "Contact Us" : listingBreakdown[row.from] || "-"}</td>
              <td>{listings > 500 && row.from === 500 ? "Contact Us" : listingBreakdown[row.from] ? `$${listingBreakdown[row.from] * row.price}` : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="contentWrapper">
        <div className="avgListings">
          Monthly Cost: {totalCost ? (listings > 500 ? "Contact Us" : totalCost === "Contact Us" ? totalCost : `$${totalCost.toLocaleString()}`) : "$0"}
        </div>
        <div className="avgListings">Avg Listing Cost: {avgCost ? (listings > 500 ? "Contact Us" : `$${avgCost.toFixed(2)}`) : "0"}</div>
      </div>
    </div>
  );
};
