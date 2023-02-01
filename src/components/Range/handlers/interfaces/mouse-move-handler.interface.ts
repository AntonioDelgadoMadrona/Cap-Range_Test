export interface MouseMoveHandlerType {
  event: React.MouseEvent<HTMLDivElement>;
  isDraggingMin: boolean;
  rangeWidth: number;
  maxPosition: number;
  setMinPosition: Function;
  mode: string;
  setMinValue: Function;
  max: number;
  min: number;
  handleChangeSelection: Function;
  maxValue: number;
  fixedValues?: number[];
  isDraggingMax: boolean;
  minPosition: number;
  setMaxPosition: Function;
  setMaxValue: Function;
  minValue: number;
}
