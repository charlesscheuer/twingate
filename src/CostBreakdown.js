import React, { useState } from "react";
import { motion } from "framer-motion";
import QuantityToggle from "./QuantityToggle";
import PriceDisplay from "./PriceDisplay";

export default function CostBreakdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  // array of toggles which are objects that have key with their type, key with text to include and their current value

  return (
    <motion.div
      className="w-full border border-border rounded-md mt-4 mb-4"
      style={{
        transition: "all 1s cubic-bezier(0.075, 0.82, 0.165, 1)",
      }}
    >
      <div
        className={
          "flex justify-between items-center px-4 py-4 bg-g-2 cursor-pointer h-16"
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
            "transition duration-200 ease-in-out selection:bg-transparent text-xl select-none " +
            (isOpen && "transform rotate-45 ")
          }
        >
          +
        </div>
      </div>
      <motion.div layout className="div">
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
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
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
