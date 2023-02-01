export interface RangeHandlersType {
  min: number;
  maxValue: number;
  setMinValue: Function;
  onChange: Function;
  minValue: number;
  max: number;
  setMaxValue: Function;
  setIsDraggingMin: Function;
  setIsDraggingMax: Function;
  isDraggingMin: boolean;
  rangeWidth: number;
  maxPosition: number;
  setMinPosition: Function;
  mode: string;
  fixedValues?: number[];
  isDraggingMax: boolean;
  minPosition: number;
  setMaxPosition: Function;
}

export interface RangeHandlersReturnType {
  handleMinValueChange: Function;
  handleMaxValueChange: Function;
  handleMinMouseDown: Function;
  handleMaxMouseDown: Function;
  handleMouseMove: Function;
  handleMouseUp: Function;
}
