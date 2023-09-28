document.addEventListener("DOMContentLoaded", () => {
  let isYearly = false;
  let listings = null;
  let totalCost = null;
  let listingBreakdown = {};
  let avgCost = null;

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

  const tableBody = document.getElementById("tableBody");
  pricingData.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.from === 500 ? "500+" : `${row.from} - ${row.to}`}</td>
      <td>${row.cost}</td>
      <td id="myListings${row.from}">-</td>
      <td id="myCost${row.from}">-</td>
    `;
    tableBody.appendChild(tr);
  });

  const calculateCostAndBreakdown = () => {
    let cost = 0;
    let remainingListings = listings || 0;
    let breakdown = {};

    pricingData.forEach(({ from, to, price }) => {
      const range = to ? to - from + 1 : remainingListings;

      if (remainingListings > 0) {
        const consumed = Math.min(range, remainingListings);
        cost += consumed * price;
        breakdown[from] = consumed;
        remainingListings -= consumed;
      }
    });

    totalCost = remainingListings > 0 ? "Contact Us" : isYearly ? cost * 0.85 : cost;
    listingBreakdown = breakdown;
    avgCost = listings > 0 ? (isYearly ? (cost * 12) / listings : cost / listings) : 0;

    Object.keys(listingBreakdown).forEach((from) => {
      document.getElementById(`myListings${from}`).textContent = listingBreakdown[from] || "-";
      document.getElementById(`myCost${from}`).textContent = listingBreakdown[from]
        ? `$${listingBreakdown[from] * pricingData.find((row) => row.from === Number(from)).price}`
        : "-";
    });

    document.getElementById("avgListings").textContent = `Avg Listing Cost: ${avgCost ? avgCost.toFixed(2) : "0"}`;
    document.getElementById("totalCost").textContent = `Monthly Cost: ${totalCost ? totalCost : "$0"}`;
  };

  document.getElementById("yearlySwapBtn").addEventListener("click", () => {
    isYearly = !isYearly;
    document.getElementById("yearlySwapBtn").textContent = isYearly ? "Switch to Monthly" : "Switch to Yearly";
    calculateCostAndBreakdown();
  });

  document.getElementById("listingInput").addEventListener("input", (e) => {
    listings = e.target.value === "" ? null : Number(e.target.value);
    calculateCostAndBreakdown();
  });
});
