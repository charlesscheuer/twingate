import React, {
  useCallback,
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

  const changeInputProgressPercentStyle = useCallback(() => {
    const logScale = new LogScale(0, 10000);
    // console.log("ran change %%%", logScale.logarithmicToLinear(props.users));
    inputRef.current.style.setProperty(
      "--webkitProgressPercent",
      `${logScale.logarithmicToLinear(props.users)}%`
    );
  }, [props.users]);

  useEffect(() => {
    changeInputProgressPercentStyle();
    const inputElement = inputRef.current;

    const handleUpAndLeave = () => setIsChanging(false);
    const handleDown = () => setIsChanging(true);

    inputElement.addEventListener("mousemove", changeInputProgressPercentStyle);
    inputElement.addEventListener("mousedown", handleDown);
    // inputElement.addEventListener("dragstart", handleDown);
    // inputElement.addEventListener("dragend", handleUpAndLeave);
    inputElement.addEventListener("mouseup", handleUpAndLeave);
    inputElement.addEventListener("mouseleave", handleUpAndLeave);
    return () => {
      inputElement.removeEventListener(
        "mousemove",
        changeInputProgressPercentStyle
      );
      inputElement.removeEventListener("mousedown", handleDown);
      inputElement.removeEventListener("mouseup", handleUpAndLeave);
      inputElement.removeEventListener("mouseleave", handleUpAndLeave);
    };
  }, [isChanging, changeInputProgressPercentStyle]);

  useEffect(() => {
    if (!inputRef?.current) return;
    // setIsLoaded(true);
    changeInputProgressPercentStyle();
  }, [inputRef, changeInputProgressPercentStyle]);

  return (
    <input
      type="range"
      ref={inputRef}
      min={min}
      max={max}
      step={step}
      defaultValue={props.users}
      onChange={(e) => props.handleUserSlide(e)}
      onMouseUp={(e) => props.onMouseUp(e)}
      className="range w-full  outline-none  slider"
      id="myRange"
    />
  );
};

export default RangeInput;
