let isYearly = false;
let listings = null;
let totalCost = 0;
let listingBreakdown = {};
let avgCost = 0;

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

document.addEventListener("DOMContentLoaded", function () {
  const switchButton = document.getElementById("switchButton");
  const listingInput = document.getElementById("listingInput");
  const calcButton = document.getElementById("calcButton");
  const resultWrapper = document.getElementById("resultWrapper");
  const avgListingCost = document.getElementById("avgListingCost");
  const pricingTableBody = document.getElementById("pricingTableBody");

  pricingData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${row.from}</td><td>${row.to !== null ? row.to : "500+"}</td><td>${row.cost}</td><td>-</td>`;
    pricingTableBody.appendChild(tr);
  });

  const calculateCostAndBreakdown = () => {
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

    totalCost = remainingListings > 0 ? "Contact Us" : isYearly ? cost * 12 : cost;
    listingBreakdown = breakdown;
    avgCost = isYearly ? (cost / listings) * 12 : cost / listings;

    resultWrapper.textContent = `Monthly Cost: ${totalCost === "Contact Us" ? totalCost : `$${totalCost}`}`;
    avgListingCost.textContent = `Avg Listing Cost: $${avgCost.toFixed(2)}`;

    pricingData.forEach((row, index) => {
      pricingTableBody.childNodes[index].lastChild.textContent = listingBreakdown[row.from] || "-";
    });
  };

  switchButton.addEventListener("click", () => {
    isYearly = !isYearly;
    switchButton.textContent = isYearly ? "Switch to Monthly" : "Switch to Yearly";
    if (listings !== null) {
      calculateCostAndBreakdown();
    }
  });

  calcButton.addEventListener("click", calculateCostAndBreakdown);

  listingInput.addEventListener("input", (e) => {
    listings = Number(e.target.value);
  });
});
