export interface RangeComponentPropsType {
  mode: "normal" | "fixed";
  min: number;
  max: number;
  fixedValues?: number[];
  onChange: (min: number, max: number) => void;
}
