import React from "react";

export default function Slider(props) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-dark font-medium">Users</h3>
        <div className="text-dark min-w-[72px] bg-g-2 py-2 rounded-md">
          {props.users}
        </div>
      </div>
      <div className="w-full">
        <input
          type="range"
          min="1"
          max="1000"
          //   value={props.users}
          defaultValue={props.users}
          onChange={(e) => props.handleUserSlide(e)}
          onMouseUp={(e) => props.handleUserSlide(e)}
          className="mt-2 w-full h-[32px] outline-none app appearance-none bg-g-2 rounded-md slider overflow-hidden"
          id="myRange"
        ></input>
      </div>
    </div>
  );
}
