// DEPENDENCIES
import styled from "styled-components";
// INTERFACES
import { RangeButtonProps } from "./interfaces/range.styled.interface";

export const RangeComponent = styled.div.attrs({
  "data-testid": "range-component",
})`
  width: 100%;
  height: auto;
  margin-top: 3rem;
  text-align: center;
`;

export const RangeTitle = styled.h2`
  font-size: 24px;
`;

export const RangeContainer = styled.div`
  width: 350px;
  height: 80px;
  position: relative;
  margin: 0 auto;
`;

export const RangeLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const RangeLabel = styled.input`
  font-size: 16px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  background-color: transparent;
  border: none;
`;

export const RangeSlider = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 14px;

  & input {
    display: none;
  }
`;

export const RangeLine = styled.div`
  height: 3px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0);
`;

export const RangeButton = styled.div<RangeButtonProps>`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 15%;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  cursor: ${({ isDragging }) => (isDragging ? "grab" : "grabbing")};

  &:hover {
    width: 18px;
    height: 18px;
  }

  left: ${({ position, side }) => (side === "right" && position > 95 ? `${position - 4}%` : `${position}%`)};
`;

export const RangeInput = styled.input`
  width: 100%;
`;
