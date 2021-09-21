import React, {
  useEffect,
  //   useMemo,
  useRef,
  useState,
} from "react";
import LogScale from "log-scale";

const RangeInput = (props) => {
  const inputRef = useRef();
  const [isChanging, setIsChanging] = useState(false);

  const min = 0;
  const max = 10000;
  const step = 1;
  const logScale = new LogScale(0, 10000);

  useEffect(() => {
    const inputElement = inputRef.current;

    const handleUpAndLeave = () => setIsChanging(false);
    const handleDown = () => setIsChanging(true);

    inputElement.addEventListener("mousedown", handleDown);
    inputElement.addEventListener("mouseup", handleUpAndLeave);
    inputElement.addEventListener("mouseleave", handleUpAndLeave);
    return () => {
      inputElement.removeEventListener("mousedown", handleDown);
      inputElement.removeEventListener("mouseup", handleUpAndLeave);
      inputElement.removeEventListener("mouseleave", handleUpAndLeave);
    };
  }, [isChanging]);

  return (
    <input
      type="range"
      ref={inputRef}
      min={min}
      max={max}
      step={step}
      defaultValue={logScale.logarithmicToLinear(props.users) * max}
      onChange={(e) => props.handleUserSlide(e)}
      onMouseUp={(e) => props.onMouseUp(e)}
      className="range w-full  outline-none  slider"
      id="myRange"
    />
  );
};

export default RangeInput;
