import React, { useState } from "react";
import { motion } from "framer-motion";
import QuantityToggle from "./QuantityToggle";
import PriceDisplay from "./PriceDisplay";

export default function CostBreakdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  // array of toggles which are objects that have key with their type, key with text to include and their current value

  return (
    <motion.div
      className="w-full bg-g-2 rounded-md mt-10 mb-4"
      style={{
        transition: "all 1s cubic-bezier(0.075, 0.82, 0.165, 1)",
      }}
    >
      <div
        className={
          "flex justify-between items-center px-4  cursor-pointer h-12"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-dark font-medium select-none">Cost Breakdown</h3>
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
            (isOpen && "transform rotate-45 ")
          }
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className=""
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
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
