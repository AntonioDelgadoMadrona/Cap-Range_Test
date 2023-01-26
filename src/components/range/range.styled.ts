// DEPENDENCIES
import styled from "styled-components";
// INTERFACES
import {
  RangeButtonProps,
  RangeLabelProps,
} from "./interfaces/range.styled.interface";

export const RangeComponent = styled.div`
  width: 500px;
  height: 50px;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
`;

export const RangeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  column-gap: 5px;
  align-items: flex-start;

  & input {
    display: none;
  }
`;

export const RangeLabel = styled.div<RangeLabelProps>`
  font-size: 16px;
  color: rgb(0, 0, 0);
  font-weight: 400;

  text-align: ${({ side }) => (side === "left" ? "right" : "left")};
`;

export const RangeSlider = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 14px;
`;

export const RangeLine = styled.div`
  width: 100%;
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
    cursor: pointer;
    width: 18px;
    height: 18px;
  }

  left: ${({ position }) => `${position}px`};
`;

export const RangeInput = styled.input``;
