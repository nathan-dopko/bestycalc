import React from "react";
import "./Card.css";
import { UilCheckCircle } from "@iconscout/react-unicons";

export const Card = () => {
  const features = [
    "AI messaging",
    "Fill orphan gap nights",
    "Embedded in your PMS",
    "AI-Generated tasks",
    "No setup required",
    "14-day free trial",
    "No credit card required",
    "Mobile app",
  ];

  return (
    <div className="card">
      <div className="cardTitle">Besty Features</div>
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
