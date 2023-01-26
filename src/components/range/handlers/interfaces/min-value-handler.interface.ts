export interface MinValueHandlerType {
  event: React.ChangeEvent<HTMLInputElement>;
  min: number;
  maxValue: number;
  setMinValue: Function;
  onChange: Function;
}
