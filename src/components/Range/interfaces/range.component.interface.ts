export interface RangeComponentPropsType {
  mode: "normal" | "fixed";
  min: number;
  max: number;
  fixedValues?: number[];
  handleChangeSelection: (min: number, max: number) => void;
  handleUpdateLabelValue: (label: "min" | "max", value: any) => void;
}
