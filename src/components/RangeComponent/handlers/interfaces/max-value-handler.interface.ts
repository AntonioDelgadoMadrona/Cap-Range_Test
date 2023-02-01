export interface MaxValueHandlerType {
  event: React.ChangeEvent<HTMLInputElement>;
  minValue: number;
  max: number;
  setMaxValue: Function;
  onChange: Function;
}
