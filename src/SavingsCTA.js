import React, { useState, useEffect } from "react";
import Odometer from "react-odometerjs";

export default function SavingsCTA(props) {
  const [annualSavings, setAnnualSavings] = useState("-");
  let twingateCost = props.users < 50 ? 5 : 10;
  let twingateTotal = twingateCost * props.users;
  let awsTotal = props.connectionFees + props.endpointAssociationFees;
  let totalMonthlySavings = awsTotal - twingateTotal; // this is monthly

  useEffect(() => {
    if (totalMonthlySavings > 0) {
      setAnnualSavings(totalMonthlySavings * 12);
    } else {
      setAnnualSavings(0);
    }
  }, [totalMonthlySavings]);

  const getDollarAmount = () => {
    // 2 comma club: 1000000
    console.log("got dollar", totalMonthlySavings);
    if (totalMonthlySavings > 0) {
      if (annualSavings > 1000000) {
        return [
          <p className="h-8 block md:hidden" style={{ fontSize: 32 }}>
            {Number(annualSavings / 1000000).toLocaleString("en-US", {
              style: "decimal",
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
            })}
            M
          </p>,
          <div className="h-8 hidden md:block font-sans">
            <Odometer value={annualSavings} format="(,ddd)" />
          </div>,
        ];
      } else
        return (
          <Odometer
            className="font-sans h-8"
            value={annualSavings}
            format="(,ddd)"
          />
        );
    } else {
      return (
        <div
          className="align-text-top align-top font-sans h-8 flex items-start"
          style={{ fontSize: 32 }}
        >
          –
        </div>
      );
    }
  };

  // console.log(annualSavings, "is annual");
  return (
    <div className="flex justify-between border-border border-t items-center px-4 py-4">
      <div className="w-1/2 flex flex-col items-start">
        <h3 className="text-dark font-medium">Total Annual Savings</h3>
        <div className="flex justify-start text-green font-bold font-sans items-start">
          ${getDollarAmount()}
        </div>
      </div>
      <button className="rounded-xl bg-primary text-g-1 p-4 hover:bg-primaryHover font-medium transition-all duration-100 ease-in">
        {" "}
        Request a demo
      </button>
    </div>
  );
}
