import React from "react";

export default function PriceDisplay(props) {
  return (
    <div className={"flex px-4 w-full items-center justify-between mt-4"}>
      <p className={props.text.includes("AWS") ? "text-aws" : "text-g-3"}>
        {props.text}
      </p>
      <div
        className={
          props.text.includes("AWS")
            ? "flex min-w-[80px] justify-center border-2  text-aws border-aws rounded-md ml-4"
            : "flex min-w-[80px] justify-center bg-g-4 rounded-md ml-4"
        }
      >
        <p
          className={
            props.text.includes("AWS")
              ? "text-aws py-2 select-none font-semibold"
              : "text-dark py-2 select-none  font-semibold"
          }
        >
          ${Number(props.value).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
