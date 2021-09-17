import React from "react";
import LogScale from "log-scale";
import RangeInput from "./RangeInput";

export default function Slider(props) {
  const logScale = new LogScale(0, 10000);
  console.log(
    logScale.linearToLogarithmic(props.users / 10000),
    "linear users",
    props.users
  );
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-dark font-medium">Users</h3>
        <div className="text-dark min-w-[72px] bg-g-2 py-2 rounded-md">
          {Number(props.users).toLocaleString()}
        </div>
      </div>
      <div className="w-full">
        <RangeInput
          handleUserSlide={props.handleUserSlide}
          users={props.users}
          onMouseUp={props.handleUserSlide}
        />
      </div>
    </div>
  );
}
