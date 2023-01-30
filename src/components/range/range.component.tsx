// DEPENDENCIES
import React from "react";
// HOOKS
import useRangeHook from "./hooks/range.hook";
// STYLED COMPONENTS
import {
  RangeComponent,
  RangeContainer,
  RangeLabelContainer,
  RangeLabel,
  RangeSlider,
  RangeLine,
  RangeButton,
  RangeInput,
} from "./range.styled";

type Props = {
  mode: "normal" | "fixed";
  min: number;
  max: number;
  fixedValues?: number[];
  onChange: (min: number, max: number) => void;
};

const Range: React.FC<Props> = ({ mode, min, max, fixedValues, onChange }) => {
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
    maxPosition,
    minPosition,
  } = useRangeHook({ mode, min, max, fixedValues, onChange });

  return (
    <RangeComponent>
      <RangeContainer
        ref={(element: any) => element && setRangeWidth(element.offsetWidth)}
        onMouseMove={(event: React.MouseEvent<HTMLDivElement>) =>
          handleMouseMove(event)
        }
        onMouseUp={() => handleMouseUp()}
      >
        <RangeLabelContainer>
          <RangeLabel>{minValue.toFixed(2)}€</RangeLabel>
          <RangeLabel>{maxValue.toFixed(2)}€</RangeLabel>
        </RangeLabelContainer>

        <RangeSlider
          ref={(element) => element && setRangeWidth(element.offsetWidth)}
          onMouseMove={(event: React.MouseEvent<HTMLDivElement>) =>
            handleMouseMove(event)
          }
          onMouseUp={() => handleMouseUp()}
        >
          <RangeLine></RangeLine>
          <RangeButton
            position={minPosition}
            onMouseDown={() => handleMinMouseDown()}
          >
            <RangeInput
              type="number"
              value={minValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleMinValueChange(event)
              }
              min={min}
              max={maxValue}
            ></RangeInput>
          </RangeButton>
          <RangeButton
            position={maxPosition}
            onMouseDown={() => handleMaxMouseDown()}
          >
            <RangeInput
              type="number"
              value={maxValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleMaxValueChange(event)
              }
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