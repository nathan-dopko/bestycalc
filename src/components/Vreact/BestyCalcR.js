import React, { useState, useEffect } from "react";
import "./styles.css";

export const BestyCalcR = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [listings, setListings] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [listingBreakdown, setListingBreakdown] = useState({});
  const [avgCost, setAvgCost] = useState(0);

  const pricingData = [
    { from: 1, to: 10, cost: "$12 for the first 10 listings", price: 12 },
    { from: 11, to: 20, cost: "$10 for each listing after 10th", price: 10 },
    { from: 21, to: 50, cost: "$8 for each listing after 20th", price: 8 },
    { from: 51, to: 100, cost: "$7 for each listing after 50th", price: 7 },
    { from: 101, to: 200, cost: "$6 for each listing after 100th", price: 6 },
    { from: 201, to: 400, cost: "$5 for each listing after 200th", price: 5 },
    { from: 401, to: 500, cost: "$4 for each listing after 400th", price: 4 },
    { from: 500, to: null, cost: "Contact Us", price: null },
  ];

  const calculateCostAndBreakdown = () => {
    let cost = null;
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
    setAvgCost(isYearly ? (cost / listings) * 12 : cost / listings);
  };

  useEffect(() => {
    calculateCostAndBreakdown();
  }, [isYearly, listings]);

  return (
    <div className="calculatorWrapper">
      <div className="headerWrapper">
        <div className="title">BestyCalcR</div>
        <button onClick={() => setIsYearly(!isYearly)}>{isYearly ? "Switch to Monthly" : "Switch to Yearly"}</button>
      </div>
      <div className="inputWrapper">
        <input type="number" value={listings} onChange={(e) => setListings(Number(e.target.value))} className="listingInput" />
        <button onClick={calculateCostAndBreakdown} className="calcButton">
          Calculate
        </button>
      </div>
      <div className="resultWrapper">Monthly Cost: {totalCost === "Contact Us" ? totalCost : `$${totalCost}`}</div>
      <div>Avg Listing Cost: ${avgCost.toFixed(2)}</div>
      <table className="pricingTable">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Monthly Cost Per Listing</th>
            <th>My Listing Count</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((row, index) => (
            <tr key={index}>
              <td>{row.from}</td>
              <td>{row.to !== null ? row.to : "500+"}</td>
              <td>{row.cost}</td>
              <td>{listingBreakdown[row.from] || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
