import React from "react";
import pptxgen from "pptxgenjs";
import numeral from "numeral";

const GenerateSlides = ({ logo, csvData, reportName, currency, color = "#9C7F6C", darkMode = false }) => {
  const generateSlides = () => {
    const pptx = new pptxgen();

    const titleSlide = pptx.addSlide();

    titleSlide.addImage({
      path: darkMode
        ? "https://raw.githubusercontent.com/nathan-dopko/images/refs/heads/main/DarkBG.png"
        : "https://raw.githubusercontent.com/nathan-dopko/images/refs/heads/main/LightBG.png",
      x: 0,
      y: 0,
      w: 10,
      h: 5.63,
    });

    titleSlide.addText(reportName || "ROI Report", {
      x: 0.95,
      y: 2.5,
      fontSize: 30,
      color: darkMode ? "#FFFFFF" : "#000000", // White for dark mode, black for light mode
      bold: true,
    });

    if (logo) {
      titleSlide.addImage({
        data: logo,
        x: 1.1,
        y: 3,
        // h: 1,
        w: 4,
      });
    }

    const sortedData = csvData
      .map((row) => ({
        ...row,
        Amount: parseFloat(row.Amount.replace(/[^0-9.-]+/g, "")) || 0,
      }))
      .sort((a, b) => b.Amount - a.Amount)
      .slice(0, 8);

    // Calculate totals
    const totalConversions = csvData.length;
    const totalAmount = csvData.reduce((sum, row) => {
      const amount = parseFloat(row.Amount.replace(/[^0-9.-]+/g, "")) || 0;
      return sum + amount;
    }, 0);

    const formattedTotalAmount = numeral(totalAmount).format("0,0");

    // Prepare table data for the top 8 conversions
    const tableData = [
      [
        {
          text: "Guest Name",
          options: { bold: true, fill: color, shape: pptx.shapes.ROUNDED_RECTANGLE, color: "FFFFFF" },
        },
        {
          text: "Date Sent",
          options: { bold: true, fill: color, shape: pptx.shapes.ROUNDED_RECTANGLE, color: "FFFFFF", align: "center" },
        },
        {
          text: "Amount",
          options: { bold: true, fill: color, shape: pptx.shapes.ROUNDED_RECTANGLE, color: "FFFFFF", align: "center" },
        },
      ],
      ...sortedData.map((row) => [
        { text: row["Guest name"] || "N/A", options: { color: color } },
        { text: row["Date Sent"] || "N/A", options: { color: color, align: "center" } },
        { text: `${currency}${row.Amount.toFixed(2)}` || "N/A", options: { color: color, align: "center" } },
      ]),
    ];

    // Create the main slide
    const slide = pptx.addSlide();

    // Add title
    slide.addText("BOOKING BOOSTER ROI REPORT", {
      x: 0.3,
      y: 0.5,
      fontSize: 24,
      bold: true,
      color: "#000044",
    });

    // Add subtitle
    slide.addText("Top Extra Bookings", {
      x: 2.4,
      y: 1.15,
      fontSize: 14,
      color: "#000000",
      bold: true,
    });

    slide.addText("head to app.getbesty.ai/dashboard to see detailed breakdown of all conversions", {
      x: 1,
      y: 1.45,
      fontSize: 10,
      color: "#4B4B4B",
      italic: true,
    });

    slide.addTable(tableData, {
      x: 0.6,
      y: 1.7,
      w: 5.5,
      fontSize: 11,
      align: "left",
      valign: "middle",
      border: { pt: 0 }, // No borders for body rows
      autoPage: false,
      rowH: 0.38, // Increase row height
    });

    // Adjust boxes' vertical position
    const boxWidth = 2.5;
    const boxHeight = 1.5;
    const rightBoxX = 6.8; // Adjust position to center boxes on the right
    const topBoxY = 1.2; // Moved boxes up
    const gapBetweenBoxes = 0.5;

    // Add "Extra Bookings" box
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: rightBoxX,
      y: topBoxY,
      w: boxWidth,
      h: boxHeight,
      fill: { color: color },
    });
    slide.addText(`${totalConversions}`, {
      x: rightBoxX,
      y: topBoxY,
      w: boxWidth,
      h: 0.9,
      align: "center",
      valign: "middle",
      fontSize: 42,
      color: "FFFFFF",
      bold: true,
    });
    slide.addText("Extra Bookings", {
      x: rightBoxX,
      y: topBoxY + boxHeight * 0.6,
      w: boxWidth,
      h: 0.5,
      align: "center",
      valign: "middle",
      fontSize: 16,
      color: "FFFFFF",
    });

    // Add "Total Value" box
    const bottomBoxY = topBoxY + boxHeight + gapBetweenBoxes;
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: rightBoxX,
      y: bottomBoxY,
      w: boxWidth,
      h: boxHeight,
      fill: { color: color },
    });
    slide.addText(`${currency}${formattedTotalAmount}`, {
      x: rightBoxX,
      y: bottomBoxY,
      w: boxWidth,
      h: 0.9,
      align: "center",
      valign: "middle",
      fontSize: 42,
      color: "FFFFFF",
      bold: true,
    });
    slide.addText("Total Value", {
      x: rightBoxX,
      y: bottomBoxY + boxHeight * 0.6,
      w: boxWidth,
      h: 0.5,
      align: "center",
      valign: "middle",
      fontSize: 16,
      color: "FFFFFF",
    });

    if (logo) {
      slide.addImage({
        data: logo,
        x: 8.8,
        y: 5.1,
        h: 0.6,
      });
    }

    // Save the presentation
    pptx.writeFile({ fileName: `${reportName}.pptx` });
  };

  return (
    <button onClick={generateSlides} disabled={!csvData.length}>
      Generate Slides
    </button>
  );
};

export default GenerateSlides;
