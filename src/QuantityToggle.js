import React from "react";

export default function QuantityToggle(props) {
  return (
    <div className="flex px-4 w-full items-center justify-between mt-4">
      <p className="text-g-3">{props.text}</p>
      <div className="flex min-w-[72px] justify-center bg-g-2 w-16 rounded-md ml-4">
        <p
          className="pr-2 text-g-3 cursor-pointer py-2 select-none"
          onClick={() => {
            props.toggleChanged(props.text, -1);
          }}
        >
          –
        </p>
        <p className="text-dark py-2 select-none">{props.value}</p>
        <p
          className="pl-2 text-g-3 cursor-pointer py-2 select-none"
          onClick={() => {
            props.toggleChanged(props.text, 1);
          }}
        >
          +
        </p>
      </div>
    </div>
  );
}
