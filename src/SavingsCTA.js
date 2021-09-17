import React from "react";

export default function SavingsCTA(props) {
  let twingateCost = props.users < 50 ? 5 : 10;
  let twingateTotal = twingateCost * props.users;
  let awsTotal = props.connectionFees + props.endpointAssociationFees;
  let totalMonthlySavings = awsTotal - twingateTotal; // this is monthly
  let annualSavings = totalMonthlySavings * 12;

  //   console.log(
  //     props.connectionFees,
  //     props.endpointAssociationFees,
  //     "are inputs"
  //   );
  return (
    <div className="flex justify-between items-center my-4">
      <div className="w-1/2 flex flex-col items-start">
        <h3 className="text-dark font-medium">Total Annual Savings</h3>
        <p className="text-green text-left text-4xl font-bold leading-none">
          ${Number(annualSavings).toLocaleString()}
        </p>
      </div>
      <button className="rounded-md bg-primary text-g-1 p-4">
        {" "}
        Request a demo
      </button>
    </div>
  );
}
