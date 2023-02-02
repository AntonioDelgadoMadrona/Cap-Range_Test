// DEPENDENCIES
import React from "react";
// HOOKS
import useRangeHook from "./hooks/range.hook";
// STYLED COMPONENTS
import {
  RangeComponent,
  RangeTitle,
  RangeContainer,
  RangeLabelContainer,
  RangeLabel,
  RangeSlider,
  RangeLine,
  RangeButton,
  RangeInput,
} from "./range.styled";
// UTILS
import { getPercent } from "./utils/range.component.util";
// INTERFACES
import { RangeComponentPropsType } from "./interfaces/range.component.interface";

const Range: React.FC<RangeComponentPropsType> = ({
  mode,
  min,
  max,
  fixedValues,
  handleChangeSelection,
  handleUpdateLabelValue,
}): React.ReactElement => {
  const {
    handleMinValueChange,
    handleMaxValueChange,
    handleMinMouseDown,
    handleMaxMouseDown,
    handleMouseMove,
    handleMouseUp,
    setRangeWidth,
    maxValue,
    minValue,
    isDragging,
  } = useRangeHook({ mode, min, max, fixedValues, handleChangeSelection });

  const rangeTitle = mode === "normal" ? "Normal Range" : "Fixed Range";

  return (
    <RangeComponent>
      <RangeTitle>{rangeTitle}</RangeTitle>
      <RangeContainer>
        <RangeLabelContainer>
          <RangeLabel
            onClick={() => "Update input type from button to number"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleUpdateLabelValue("min", event.target.value)}
            type="button"
            defaultValue={`${minValue.toFixed(2)}€`}
          />
          <RangeLabel
            onClick={() => "Update input type from button to number"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleUpdateLabelValue("max", event.target.value)}
            type="button"
            defaultValue={`${maxValue.toFixed(2)}€`}
          />
        </RangeLabelContainer>

        <RangeSlider
          ref={(element) => element && setRangeWidth(element.offsetWidth)}
          onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => handleMouseMove(event)}
          onMouseUp={() => handleMouseUp()}
        >
          <RangeLine></RangeLine>
          <RangeButton
            side="left"
            isDragging={isDragging}
            position={getPercent(min, max, minValue)}
            onMouseDown={() => handleMinMouseDown()}
          >
            <RangeInput
              type="number"
              value={minValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleMinValueChange(event)}
              min={min}
              max={maxValue}
            ></RangeInput>
          </RangeButton>
          <RangeButton
            side="right"
            isDragging={isDragging}
            position={getPercent(min, max, maxValue)}
            onMouseDown={() => handleMaxMouseDown()}
          >
            <RangeInput
              type="number"
              value={maxValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleMaxValueChange(event)}
              min={minValue}
              max={max}
            />
          </RangeButton>
        </RangeSlider>
      </RangeContainer>
    </RangeComponent>
  );
};

export default Range;
