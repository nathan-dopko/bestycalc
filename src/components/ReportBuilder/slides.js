import React from "react";
import pptxgen from "pptxgenjs";
import numeral from "numeral";

const GenerateSlides = ({ logo, csvData, reportName, currency }) => {
  const generateSlides = () => {
    const pptx = new pptxgen();

    // 1. Sort and filter the top 8 conversions by `Amount`
    const sortedData = csvData
      .map((row) => ({
        ...row,
        Amount: parseFloat(row.Amount.replace(/[^0-9.-]+/g, "")) || 0, // Convert Amount to number
      }))
      .sort((a, b) => b.Amount - a.Amount) // Sort by Amount (descending)
      .slice(0, 8); // Take the top 8

    // 2. Calculate totals
    const totalConversions = csvData.length;
    const totalAmount = csvData.reduce((sum, row) => {
      const amount = parseFloat(row.Amount.replace(/[^0-9.-]+/g, "")) || 0;
      return sum + amount;
    }, 0);

    const formattedTotalAmount = numeral(totalAmount).format("0,0");

    // 3. Prepare table data for the top 8 conversions
    const tableData = [
      ["Guest Name", "Date Sent", "Amount"],
      ...sortedData.map((row) => [row["Guest name"] || "N/A", row["Date Sent"] || "N/A", `${currency}${row.Amount.toFixed(2)}` || "N/A"]),
    ];

    

    // 4. Create the slide
    const slide = pptx.addSlide();

    // Add title
    slide.addText("BOOKING BOOSTER ROI REPORT", {
      x: 0.5,
      y: 0.3,
      fontSize: 28,
      bold: true,
      color: "#000044",
    });

    // Add logo (bottom-right corner)
    if (logo) {
      slide.addImage({
        data: logo,
        x: 8.9,
        y: 5,
        h: 0.5,
      });
    }

    // Add table for top 8 conversions
    slide.addTable(tableData, {
      x: 0.5,
      y: 1.2,
      w: 6.5,
      fontSize: 11,
      align: "middle",
      valign: "middle",
    });

    // Add "Extra Bookings" box
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 6,
      y: 2.5,
      w: 3,
      h: 1.5,
      fill: { color: "#9C413D" },
    });
    slide.addText(`${totalConversions}`, {
      x: 6,
      y: 2.5,
      w: 3,
      h: 0.9,
      align: "center",
      fontSize: 36,
      color: "FFFFFF",
      bold: true,
    });
    slide.addText("Extra Bookings", {
      x: 7.5,
      y: 3.3,
      w: 3,
      h: 0.5,
      align: "center",
      fontSize: 16,
      color: "FFFFFF",
    });

    // // Add "Total Value" box
    // slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    //   x: 7.5,
    //   y: 4.5,
    //   w: 3,
    //   h: 1.5,
    //   fill: { color: "#9C413D" },
    // });
    // slide.addText(`${currency}${formattedTotalAmount}`, {
    //   x: 7.5,
    //   y: 4.5,
    //   w: 3,
    //   h: 0.9,
    //   align: "center",
    //   fontSize: 36,
    //   color: "FFFFFF",
    //   bold: true,
    // });
    // slide.addText("Total Value", {
    //   x: 7.5,
    //   y: 5.3,
    //   w: 3,
    //   h: 0.5,
    //   align: "center",
    //   fontSize: 16,
    //   color: "FFFFFF",
    // });

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
