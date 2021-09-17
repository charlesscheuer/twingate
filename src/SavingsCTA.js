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
    }
  }, [totalMonthlySavings]);

  console.log(annualSavings, "is annual");
  return (
    <div className="flex justify-between items-center my-4">
      <div className="w-1/2 flex flex-col items-start">
        <h3 className="text-dark font-medium">Total Annual Savings</h3>
        <div className="flex justify-start text-green font-bold">
          $
          <Odometer value={annualSavings} format="(,ddd)" />
        </div>
      </div>
      <button className="rounded-md bg-primary text-g-1 p-4">
        {" "}
        Request a demo
      </button>
    </div>
  );
}
