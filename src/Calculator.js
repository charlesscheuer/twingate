import React, { useState, useEffect } from "react";
import LogScale from "log-scale";
import Slider from "./Slider";
import CostBreakdown from "./CostBreakdown";
import Graph from "./Graph";
import SavingsCTA from "./SavingsCTA";

export default function Calculator(props) {
  const clientHourCost = 0.05;
  const associationHourCost = 0.15;
  const [users, setUsers] = useState(25);
  const [numClients, setNumClients] = useState(1);
  const [numEndpoints, setNumEndpoints] = useState(2);
  const [numHours, setNumHours] = useState(8);
  const [numAssociations, setNumAssociations] = useState(2);
  const [endpointAssociationFees, setEndpointAssociationFees] = useState(
    numEndpoints * numAssociations * (24 * 30) * associationHourCost
  );
  const [connectionFees, setConnectionFees] = useState(0);

  const logScale = new LogScale(0, 10000);

  const toggleChanged = (type, direction) => {
    if (type === "Average number of clients") {
      // if it is zero don't subract
      if (!(numClients + direction < 1)) {
        setNumClients(numClients + direction);
      }
    }

    if (type === "Endpoints") {
      // if it is zero don't subract
      if (!(numEndpoints + direction < 1)) {
        setNumEndpoints(numEndpoints + direction);
      }
    }

    if (type === "Hours used per day") {
      // if it is zero don't subract
      if (!(numHours + direction < 1) && !(numHours + direction > 24)) {
        setNumHours(numHours + direction);
      }
    }

    if (type === "Average associations") {
      // if it is zero don't subract
      if (!(numAssociations + direction < 1)) {
        setNumAssociations(numAssociations + direction);
      }
    }

    // switch (type) {
    //   // increase
    //   case "numClients":
    //     console.log("reacheddd");
    //     if (direction === "increase") setNumClients(numClients + 1);
    //     break;
    //   default:
    //     break;
    // }
  };

  const handleUserSlide = (e) => {
    if (!isNaN(logScale.linearToLogarithmic(e.target.value / 10000))) {
      console.log(
        logScale.linearToLogarithmic(e.target.value / 10000),
        "linear users"
      );
      setUsers(logScale.linearToLogarithmic(e.target.value / 10000));
    }
  };

  useEffect(() => {
    // console.log("reached me dude");
    setEndpointAssociationFees(
      numEndpoints * numAssociations * (24 * 30) * associationHourCost
    );
    setConnectionFees(users * numClients * numHours * 30 * clientHourCost);
  }, [numAssociations, numClients, numHours, numEndpoints, users]);
  //   console.log(endpointAssociationFees);
  // console.log(numEndpoints * numAssociations * (24 * 30) * associationHourCost);
  return (
    <div className="w-full">
      <h1 className="font-semibold text-left text-2xl mt-4  text-dark">
        Cost Calculator
      </h1>
      <Slider handleUserSlide={handleUserSlide} users={users} />
      <CostBreakdown
        toggleChanged={toggleChanged}
        numAssociations={numAssociations}
        numClients={numClients}
        numEndpoints={numEndpoints}
        numHours={numHours}
        clientHourCost={clientHourCost}
        associationHourCost={associationHourCost}
        connectionFees={connectionFees}
        endpointAssociationFees={endpointAssociationFees}
      />
      <Graph
        users={users}
        connectionFees={connectionFees}
        endpointAssociationFees={endpointAssociationFees}
      />
      <SavingsCTA
        users={users}
        connectionFees={connectionFees}
        endpointAssociationFees={endpointAssociationFees}
      />
    </div>
  );
}
