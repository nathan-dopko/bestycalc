import React from "react";
import "./Card.css";
import { UilCheckCircle } from "@iconscout/react-unicons";

export const Card = () => {
  const features = [
    "Quick AI responses",
    "Auto Pilot Messaging",
    "Host Alerts & Notifications",
    "Host Notes",
    "Orphan gap auctions",
    "Auto-import Information",
    "Embedded in PMS inbox",
    "Listings Sandbox",
  ];

  return (
    <div className="card">
      <div className="cardTitle">Features Included</div>
      <div className="featuresList">
        {features.map((feature, index) => (
          <div key={index} className="featureItem">
            <UilCheckCircle className="checkIcon" color={"green"} size={30} />
            <span className="featureText">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
