// DEPENDENCIES
import { useState, useEffect } from "react";
// HANDLERS
import RangeHandlers from "../handlers/range.handlers";
// TYPES
import type { RangeHookPropsType } from "./types/hook-props.type";
import type { RangeHookPropsReturnType } from "./types/hook-props-return.type";

export default function useRangeHook({
  mode,
  min,
  max,
  fixedValues,
  onChange,
}: RangeHookPropsType): RangeHookPropsReturnType {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [isDraggingMin, setIsDraggingMin] = useState(false);
  const [isDraggingMax, setIsDraggingMax] = useState(false);
  const [rangeWidth, setRangeWidth] = useState(0);
  const [minPosition, setMinPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(100);

  const {
    handleMinValueChange,
    handleMaxValueChange,
    handleMinMouseDown,
    handleMaxMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = RangeHandlers({
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
  });

  return {
    handleMinValueChange,
    handleMaxValueChange,
    handleMinMouseDown,
    handleMaxMouseDown,
    handleMouseMove,
    handleMouseUp,
    setRangeWidth,
    maxValue,
    minValue,
    maxPosition,
    minPosition,
  };
}
