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
            ? "flex min-w-[80px] justify-center  text-aws rounded-md ml-4"
            : "flex min-w-[80px] justify-center bg-g-2 rounded-md ml-4"
        }
      >
        <p
          className={
            props.text.includes("AWS")
              ? "text-aws py-2 select-none font-semibold"
              : "text-dark py-2 select-none  font-semibold"
          }
        >
          $
          {Number(props.value).toLocaleString("en-US", {
            style: "decimal",
            maximumFractionDigits: props.text.includes("AWS") ? 0 : 2,
            minimumFractionDigits: 0,
          })}
        </p>
      </div>
    </div>
  );
}
