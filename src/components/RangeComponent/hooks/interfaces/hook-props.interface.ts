export interface RangeHookPropsType {
  mode: "normal" | "fixed";
  min: number;
  max: number;
  fixedValues?: number[];
  onChange: Function;
}
