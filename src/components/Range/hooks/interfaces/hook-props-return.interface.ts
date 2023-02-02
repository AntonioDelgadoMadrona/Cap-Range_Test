export interface RangeHookPropsReturnType {
  handleMinValueChange: Function;
  handleMaxValueChange: Function;
  handleMinMouseDown: Function;
  handleMaxMouseDown: Function;
  handleMouseMove: Function;
  handleMouseUp: Function;
  setRangeWidth: Function;
  maxValue: number;
  minValue: number;
  isDragging: boolean;
}
