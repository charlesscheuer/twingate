import React from "react";
import { motion } from "framer-motion";
import LogScale from "log-scale";
import twingateLogo from "./twingate-logo.png";
import awsLogo from "./aws-logo.png";

export default function Graph(props) {
  let twingateCost = props.users < 50 ? 5 : 10;
  let twingateTotal = twingateCost * props.users;
  let awsTotal = props.connectionFees + props.endpointAssociationFees;

  const logScale = new LogScale(1, 400000);

  // console.log(aws, "aws width", "twingate::", twingate);

  const getAwsWidth = () => {
    const aws = logScale.logarithmicToLinear(awsTotal) * 100;
    if (awsTotal < twingateTotal) {
      console.log("reached the  less than case for AWWWS");
      return `${aws - 10}%`;
    } else {
      console.log("reached the GREATER than case for AWWWS");
      return `${aws}%`;
    }
  };

  const getTwingateWidth = () => {
    const twingate = logScale.logarithmicToLinear(twingateTotal) * 100;
    // console.log(twingate, "is Value for twingate");

    // if twingate is less subtract 10%;
    console.log(twingateCost, "is twingate cost", twingateTotal, "is total");
    if (twingateTotal === 0) {
      console.log("reached the zero case");
      return "100px";
    } else if (twingateTotal < awsTotal) {
      console.log("reached the  less than case");
      return `${twingate - 10}%`;
    } else {
      console.log("reached the just return value case, ", twingate);
      return `${twingate}%`;
    }
  };

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
        <motion.div
          animate={{ width: getAwsWidth() }}
          layout
          // transition={{ ease: "easeIn", duration: 1 }}
          className="bg-aws h-12 rounded-tr-md rounded-br-md  flex justify-between items-center"
        >
          <p className="ml-4 text-g-1">${Number(awsTotal).toLocaleString()}</p>
          <img src={awsLogo} alt="the aws logo" className="h-8 mr-4" />
        </motion.div>

        <motion.div
          style={{
            // width: `${twingate === 0 ? "100px" : `${twingate - 10}%`}`,
            // transition: "all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1)",
            minWidth: "100px",
            opacity: `${twingateCost === 0 ? 0.1 : 1}`,
          }}
          layout
          animate={{
            width: getTwingateWidth(),
          }}
          // transition={{ ease: "easeIn", duration: 1 }}
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
        </motion.div>
      </div>
    </div>
  );
}
