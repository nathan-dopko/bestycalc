import React, { useEffect, useState } from "react";
import "./MessageStats.css";

const MessageStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("message-stats");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/message-stats");

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const csvText = await response.text();
        if (!csvText.trim()) {
          throw new Error("Received empty CSV data");
        }

        const rows = csvText.split("\n").map((row) => row.split(","));
        if (rows.length < 2) {
          throw new Error("CSV data is incomplete");
        }

        const headers = rows[0];
        const data = rows
          .slice(1)
          .map((row) => {
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
          })
          .filter((row) => row["BFF Live"] === "1");

        setStats(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError(err.message || "An error occurred while fetching the data");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const renderMessageStats = () => (
    <div className="message-stats">
      <h1>Message Statistics</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>{stats.length > 0 && Object.keys(stats[0]).map((header) => <th key={header}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {stats.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderUpsellAnalytics = () => {
    const usersWithLowOffers = stats.filter((row) => {
      const totalOffers = parseInt(row["Total Offers"] || "0", 10);
      return totalOffers < 10;
    });

    return (
      <div className="upsell-analytics">
        <h1>Upsell Analytics</h1>
        <div className="analytics-summary">
          <h2>Users with Low Offer Count</h2>
          <p>Number of users with less than 10 total offers: {usersWithLowOffers.length}</p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Email</th>
                  <th>Total Offers</th>
                  <th>Custom Upsells</th>
                  <th>Early Checkin</th>
                  <th>Extra Nights</th>
                  <th>Late Checkout</th>
                  <th>Multiple Offers</th>
                  <th>Other Offers</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {usersWithLowOffers.map((user, index) => (
                  <tr key={index}>
                    <td>{user["User ID"] || "Unknown"}</td>
                    <td>{user["Email"] || "Unknown"}</td>
                    <td>{user["Total Offers"] || "0"}</td>
                    <td>{user["Custom Upsells"] || "0"}</td>
                    <td>{user["Early Checkin"] || "0"}</td>
                    <td>{user["Extra Nights"] || "0"}</td>
                    <td>{user["Late Checkout"] || "0"}</td>
                    <td>{user["Multiple Offers"] || "0"}</td>
                    <td>{user["Other Offers"] || "0"}</td>
                    <td className="warning">Needs Attention</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="stats-container">
      <div className="tabs">
        <button className={`tab-button ${activeTab === "message-stats" ? "active" : ""}`} onClick={() => setActiveTab("message-stats")}>
          Message Stats
        </button>
        <button className={`tab-button ${activeTab === "upsell-analytics" ? "active" : ""}`} onClick={() => setActiveTab("upsell-analytics")}>
          Upsell Analytics
        </button>
      </div>
      <div className="tab-content">{activeTab === "message-stats" ? renderMessageStats() : renderUpsellAnalytics()}</div>
    </div>
  );
};

export default MessageStats;
