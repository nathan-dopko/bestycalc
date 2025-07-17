import React, { useState, useEffect } from "react";
import numeral from "numeral";
import styles from "./BestyPricingCalculator.module.css";

const calculatePriceExternal = (listings, option) => {
  if (listings === 0) return 0;

  let basePrice;
  if (listings <= 10) {
    basePrice = 3000 / 12;
  } else if (listings <= 50) {
    basePrice = 250 + (listings - 10) * 15;
  } else if (listings <= 100) {
    basePrice = 250 + 40 * 15 + (listings - 50) * 10;
  } else if (listings <= 250) {
    basePrice = 250 + 40 * 15 + 50 * 10 + (listings - 100) * 9;
  } else if (listings <= 499) {
    basePrice = 250 + 40 * 15 + 50 * 10 + 150 * 9 + (listings - 250) * 7;
  } else if (listings <= 999) {
    basePrice = 250 + 40 * 15 + 50 * 10 + 150 * 9 + 249 * 7 + (listings - 499) * 5;
  } else {
    basePrice = 250 + 40 * 15 + 50 * 10 + 150 * 9 + 249 * 7 + 500 * 5 + (listings - 999) * 3;
  }

  const price = Math.max(basePrice, (10000 / 12) * (listings >= 50 ? 1 : 0));

  if (option === "option2") {
    return price + listings * 3;
  }
  return price;
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const CopyButton = ({ value }) => (
  <button className={styles.copyButton} onClick={() => copyToClipboard(value)}>
    copy
  </button>
);

export const BestyPricingCalculatorExternal = () => {
  const [listings, setListings] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [monthlyCost1, setMonthlyCost1] = useState(0);
  const [monthlyCost2, setMonthlyCost2] = useState(0);
  const [costPerListing1, setCostPerListing1] = useState(0);
  const [costPerListing2, setCostPerListing2] = useState(0);

  useEffect(() => {
    const newMonthlyCost1 = calculatePriceExternal(listings, "option1") * (1 - discount / 100);
    const newMonthlyCost2 = calculatePriceExternal(listings, "option2") * (1 - discount / 100);

    setMonthlyCost1(newMonthlyCost1);
    setMonthlyCost2(newMonthlyCost2);
    setCostPerListing1(listings > 0 ? newMonthlyCost1 / listings : 0);
    setCostPerListing2(listings > 0 ? newMonthlyCost2 / listings : 0);
  }, [listings, discount]);

  return (
    <div className={styles.calculatorWrapper}>
      <h2 className={styles.calculatorTitle}>Besty Pricing Calculator</h2>
      Listings <input type="number" value={listings} onChange={(e) => setListings(Number(e.target.value) || 0)} className={styles.listingInput} placeholder="Enter Listing Count" />
      <table className={styles.pricingTable}>
        <thead>
          <tr>
            <th></th>
            <th>Option 1</th>
            <th>Option 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cost per Listing (per month)</td>
            <td>
              ${numeral(costPerListing1).format("0.00")} <CopyButton value={numeral(costPerListing1).format("0.00")} />
            </td>
            <td>
              ${numeral(costPerListing2).format("0.00")} <CopyButton value={numeral(costPerListing2).format("0.00")} />
            </td>
          </tr>
          <tr>
            <td>Monthly Price</td>
            <td>
              ${numeral(monthlyCost1).format("0,0.00")} <CopyButton value={numeral(monthlyCost1).format("0,0.00")} />
            </td>
            <td>
              ${numeral(monthlyCost2).format("0,0.00")} <CopyButton value={numeral(monthlyCost2).format("0,0.00")} />
            </td>
          </tr>
          <tr>
            <td>Quarterly Price</td>
            <td>
              ${numeral(monthlyCost1 * 0.95).format("0,0.00")} <CopyButton value={numeral(monthlyCost1 * 0.95).format("0,0.00")} />
            </td>
            <td>
              ${numeral(monthlyCost2 * 0.95).format("0,0.00")} <CopyButton value={numeral(monthlyCost2 * 0.95).format("0,0.00")} />
            </td>
          </tr>
          <tr>
            <td>Annual Price</td>
            <td>
              ${numeral(monthlyCost1 * 0.9).format("0,0.00")} <CopyButton value={numeral(monthlyCost1 * 0.9).format("0,0.00")} />
            </td>
            <td>
              ${numeral(monthlyCost2 * 0.9).format("0,0.00")} <CopyButton value={numeral(monthlyCost2 * 0.9).format("0,0.00")} />
            </td>
          </tr>
          <tr>
            <td>Upsell Percentage</td>
            <td>9%</td>
            <td>6%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
