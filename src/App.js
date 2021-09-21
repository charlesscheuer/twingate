import React from "react";
import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <div className="App flex flex-col w-full items-center">
      {/** container with maxwidth 710 */}
      <div className="max-w-[724px] mt-8 px-4">
        <h1 className="font-bold text-left text-4xl text-dark">
          AWS VPN Pricing Calculator
        </h1>
        <p className="text-left text-dark">
          Because there are a lot of variables to crunch when working out
          pricing, to help you estimate AWS Client VPN fees, we’ve made this
          handy AWS VPN Pricing Calculator.
        </p>
      </div>
      <div className="max-w-[724px] w-full mt-8 border border-border rounded-md transition-all duration-300 ease-in-out">
        <Calculator />
      </div>
      <div className="max-w-[724px] mt-8 px-4">
        <p className="text-left text-dark">
          We note that pricing changes from time to time. The information in
          this article is accurate to the best of our knowledge at the date of
          writing, but you should check the AWS website for the most up to date
          pricing.
        </p>
      </div>
    </div>
  );
}

export default App;
