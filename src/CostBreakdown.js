import React, { useState } from "react";
import { motion } from "framer-motion";
import QuantityToggle from "./QuantityToggle";
import PriceDisplay from "./PriceDisplay";

export default function CostBreakdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  // array of toggles which are objects that have key with their type, key with text to include and their current value

  return (
    <motion.div
      className="w-fullrounded-md mt-10 mb-4"
      style={{
        transition: "all 1s cubic-bezier(0.075, 0.82, 0.165, 1)",
      }}
    >
      <div
        className={"flex justify-start items-center cursor-pointer h-12"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-dark font-medium select-none mr-4">
          Cost Breakdown
        </h3>

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
            "transition duration-200 rounded-full ease-in-out selection:bg-transparent text-2xl select-none font-semibold origin-center" +
            (isOpen && "transform rotate-180 ")
          }
        >
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.51459 5.42426L11.4843 0.45459L12.5449 1.51525L6.51459 7.54558L0.484262 1.51525L1.54492 0.454589L6.51459 5.42426Z"
              fill="#363638"
            />
          </svg>
        </div>
      </div>
      <motion.div className="div bg-g-1">
        {isOpen && [
          <div className="flex flex-col md:flex-row justify-between items-center select-none ">
            <QuantityToggle
              text={"Average number of clients"}
              toggleChanged={props.toggleChanged}
              value={props.numClients}
            />
            <QuantityToggle
              text={"Endpoints"}
              toggleChanged={props.toggleChanged}
              value={props.numEndpoints}
            />
          </div>,
          <div className="flex flex-col md:flex-row justify-between items-center select-none ">
            <QuantityToggle
              text={"Hours used per day"}
              toggleChanged={props.toggleChanged}
              value={props.numHours}
            />
            <QuantityToggle
              text={"Average associations"}
              toggleChanged={props.toggleChanged}
              value={props.numAssociations}
            />
          </div>,
          <div className="flex flex-col md:flex-row justify-between items-center select-none ">
            <PriceDisplay
              text={"Cost per client hour"}
              value={props.clientHourCost}
            />
            <PriceDisplay
              text={"Cost per association hour"}
              value={props.associationHourCost}
            />
          </div>,
          <div className="flex flex-col md:flex-row justify-between items-center pb-4">
            <PriceDisplay
              text={"AWS Connection Fees"}
              value={props.connectionFees}
            />
            <PriceDisplay
              text={"AWS Endpoint Fees"}
              value={props.endpointAssociationFees}
            />
          </div>,
        ]}
      </motion.div>
    </motion.div>
  );
}
