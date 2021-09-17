import React from "react";
import twingateLogo from "./twingate-logo.png";
import awsLogo from "./aws-logo.png";

export default function Graph(props) {
  let twingateCost = props.users < 50 ? 5 : 10;
  let twingateTotal = twingateCost * props.users;
  let awsTotal = props.connectionFees + props.endpointAssociationFees;
  return (
    <div className="w-full border border-border rounded-md mt-4 mb-4 transition duration-300 ease-in-out ">
      <div
        className={
          "flex justify-between items-center px-4 py-4 cursor-pointer "
        }
      >
        <h3 className="text-dark font-medium">Total Cost</h3>
        <div
          style={{
            "::selection": {
              background: "transparent",
            },
            "moz-::selection": {
              backgroundColor: "transparent",
            },
          }}
          className={
            "opacity-0 transition duration-200 ease-in-out selection:bg-transparent text-xl select-none h-"
          }
        >
          +
        </div>
      </div>
      <div className="bg-g-2 overflow-hidden py-8">
        <div
          style={{
            width: 220 + awsTotal / 10,
            transition: "all 1s cubic-bezier(0.075, 0.82, 0.165, 1);",
          }}
          className="bg-aws h-12 rounded-tr-md rounded-br-md  flex justify-between items-center"
        >
          <p className="ml-4 text-g-1">${Number(awsTotal).toLocaleString()}</p>
          <img src={awsLogo} alt="the aws logo" className="h-8 mr-4" />
        </div>

        <div
          style={{
            width: 220 + twingateTotal / 10,
            transition: "all 1s cubic-bezier(0.075, 0.82, 0.165, 1);",
          }}
          className="bg-primary mt-2 h-12 rounded-tr-md rounded-br-md flex justify-between items-center"
        >
          <p className="ml-4 text-g-1">
            ${Number(twingateTotal).toLocaleString()}
          </p>
          <img
            src={twingateLogo}
            alt="the twingate logo"
            className="h-8 mr-4"
          />
        </div>
      </div>
    </div>
  );
}
