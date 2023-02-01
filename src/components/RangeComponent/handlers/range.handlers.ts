// DEPENDENCIES
import React from "react";
// INTERFACES
import { RangeHandlersType, RangeHandlersReturnType } from "./interfaces/range-handlers.interface";
import { MinValueHandlerType } from "./interfaces/min-value-handler.interface";
import { MaxValueHandlerType } from "./interfaces/max-value-handler.interface";
import { MinMouseDownHandlerType } from "./interfaces/min-mouse-down-handler.interface";
import { MaxMouseDownHandlerType } from "./interfaces/max-mouse-down-handler.interface";
import { MouseMoveHandlerType } from "./interfaces/mouse-move-handler.interface";
import { MouseUpHandlerType } from "./interfaces/mouse-up-handler.interface";

const minValueChangeHandler = ({ event, min, maxValue, setMinValue, onChange }: MinValueHandlerType) => {
  const newValue = parseFloat(event.target.value);
  if (newValue >= min && newValue < maxValue) {
    setMinValue(newValue);
    onChange(newValue, maxValue);
  }
};

const maxValueChangeHandler = ({ event, minValue, max, setMaxValue, onChange }: MaxValueHandlerType) => {
  const newValue = parseFloat(event.target.value);
  if (newValue > minValue && newValue <= max) {
    setMaxValue(newValue);
    onChange(minValue, newValue);
  }
};

const minMouseDownHandler = ({ setIsDraggingMin }: MinMouseDownHandlerType) => {
  setIsDraggingMin(true);
};

const maxMouseDownHandler = ({ setIsDraggingMax }: MaxMouseDownHandlerType) => {
  setIsDraggingMax(true);
};

const mouseMoveHandler = ({
  event,
  isDraggingMin,
  rangeWidth,
  maxPosition,
  setMinPosition,
  mode,
  setMinValue,
  max,
  min,
  onChange,
  maxValue,
  fixedValues,
  isDraggingMax,
  minPosition,
  setMaxPosition,
  setMaxValue,
  minValue,
}: MouseMoveHandlerType) => {
  if (isDraggingMin) {
    const newPosition = event.clientX - rangeWidth;
    if (newPosition >= 0 && newPosition < maxPosition) {
      setMinPosition(newPosition);
      if (mode === "normal") {
        setMinValue((newPosition / rangeWidth) * (max - min) + min);
        onChange((newPosition / rangeWidth) * (max - min) + min, maxValue);
      } else {
        const closestValue = fixedValues?.reduce((prev: number, curr: number) =>
          Math.abs(curr - min) < Math.abs(prev - min) ? curr : prev
        );
        if (closestValue) {
          setMinValue(closestValue);
          onChange(closestValue, maxValue);
        }
      }
    }
  }
  if (isDraggingMax) {
    const newPosition = event.clientX - rangeWidth;
    if (newPosition > minPosition && newPosition <= rangeWidth) {
      setMaxPosition(newPosition);
      if (mode === "normal") {
        setMaxValue((newPosition / rangeWidth) * (max - min) + min);
        onChange(minValue, (newPosition / rangeWidth) * (max - min) + min);
      } else {
        const closestValue = fixedValues?.reduce((prev: number, curr: number) =>
          Math.abs(curr - max) < Math.abs(prev - max) ? curr : prev
        );
        if (closestValue) {
          setMaxValue(closestValue);
          onChange(minValue, closestValue);
        }
      }
    }
  }
};

const mouseUpHandler = ({ setIsDraggingMin, setIsDraggingMax }: MouseUpHandlerType) => {
  setIsDraggingMin(false);
  setIsDraggingMax(false);
};

const RangeHandlers = ({
  min,
  maxValue,
  setMinValue,
  onChange,
  minValue,
  max,
  setMaxValue,
  setIsDraggingMin,
  setIsDraggingMax,
  isDraggingMin,
  rangeWidth,
  maxPosition,
  setMinPosition,
  mode,
  fixedValues,
  isDraggingMax,
  minPosition,
  setMaxPosition,
}: RangeHandlersType): RangeHandlersReturnType => ({
  handleMinValueChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    minValueChangeHandler({
      event,
      min,
      maxValue,
      setMinValue,
      onChange,
    }),
  handleMaxValueChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    maxValueChangeHandler({
      event,
      minValue,
      max,
      setMaxValue,
      onChange,
    }),
  handleMinMouseDown: () => minMouseDownHandler({ setIsDraggingMin }),
  handleMaxMouseDown: () => maxMouseDownHandler({ setIsDraggingMax }),
  handleMouseMove: (event: React.MouseEvent<HTMLDivElement>) =>
    mouseMoveHandler({
      event,
      isDraggingMin,
      rangeWidth,
      maxPosition,
      setMinPosition,
      mode,
      setMinValue,
      max,
      min,
      onChange,
      maxValue,
      fixedValues,
      isDraggingMax,
      minPosition,
      setMaxPosition,
      setMaxValue,
      minValue,
    }),
  handleMouseUp: () =>
    mouseUpHandler({
      setIsDraggingMin,
      setIsDraggingMax,
    }),
});

export default RangeHandlers;
