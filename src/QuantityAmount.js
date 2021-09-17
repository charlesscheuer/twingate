import React from "react";

export default function QuantityAmount(props) {
  return (
    <div className="flex px-4 w-full items-center justify-between mt-4">
      <p>{props.text}</p>
      <div className="flex min-w-[72px] justify-center bg-g-2 w-16 rounded-md ml-4">
        <p className="text-dark py-2 select-none">{props.value}</p>
      </div>
    </div>
  );
}
