import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const RangeInput = (props) => {
  const inputRef = useRef();
  const [isChanging, setIsChanging] = useState(false);

  const min = 0;
  const max = 10000;
  const step = 1;

  const getPercent = useMemo(
    () => (value) => {
      return ((value - min) / (max - min)) * 100;
    },
    [max, min]
  );

  const changeInputProgressPercentStyle = useCallback(() => {
    inputRef.current.style.setProperty(
      "--webkitProgressPercent",
      `${getPercent(inputRef.current.value)}%`
    );
  }, [getPercent]);

  useEffect(() => {
    changeInputProgressPercentStyle();
    const inputElement = inputRef.current;

    const handleUpAndLeave = () => setIsChanging(false);
    const handleDown = () => setIsChanging(true);

    inputElement.addEventListener("mousemove", changeInputProgressPercentStyle);
    inputElement.addEventListener("mousedown", handleDown);
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
      className="range w-full h-[40px] outline-none rounded-md slider"
      id="myRange"
    />
  );
};

export default RangeInput;
