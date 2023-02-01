// DEPENDENCIES
import styled from "styled-components";
// INTERFACES
import { RangeButtonProps } from "./interfaces/range.styled.interface";

export const RangeComponent = styled.div.attrs({
  "data-testid": "range-component",
})`
  width: 100%;
  height: auto;
  margin: 15rem auto auto 20rem;
`;

export const RangeContainer = styled.div`
  width: 300px;
  height: 40px;
  position: relative;

  & input {
    display: none;
  }
`;

export const RangeLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const RangeLabel = styled.div`
  font-size: 16px;
  color: rgb(0, 0, 0);
  font-weight: 400;
`;

export const RangeSlider = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 14px;
  cursor: pointer;
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
  left: 0;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;

  &:hover {
    width: 18px;
    height: 18px;
  }

  left: ${({ position }) => `${position}%`};
`;

export const RangeInput = styled.input`
  width: 100%;
`;
