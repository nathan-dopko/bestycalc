import { BestyCalc } from "../Vreact/BestyCalcR";

const pricingData = [
  { from: 1, to: 10, cost: "$18", price: 18 },
  { from: 11, to: 20, cost: "$15", price: 15 },
  { from: 21, to: 50, cost: "$12", price: 12 },
  { from: 51, to: 100, cost: "$10", price: 10 },
  { from: 101, to: 200, cost: "$9", price: 9 },
  { from: 201, to: 400, cost: "$7", price: 7 },
  { from: 401, to: 500, cost: "$6", price: 6 },
  { from: 500, to: 999, cost: "$5", price: 5 },
  { from: 1000, to: Infinity, cost: "$4", price: 4 },
];

export const BFFCalc = () => {
  return <BestyCalc pricingData={pricingData} />;
};
