// DEPENDENCIES
import React from "react";
import { render } from "../../../utils/test-utils";
// COMPONENTS
import RangeComponent from "../range.component";
// MOCKS
jest.mock("../hooks/range.hook", () => {
  return jest.fn(() => ({
    handleMinValueChange: jest.fn(),
    handleMaxValueChange: jest.fn(),
    handleMinMouseDown: jest.fn(),
    handleMaxMouseDown: jest.fn(),
    handleMouseMove: jest.fn(),
    handleMouseUp: jest.fn(),
    setRangeWidth: jest.fn(),
    maxValue: 100,
    minValue: 0,
    maxPosition: 100,
    minPosition: 0,
  }));
});

describe("Range Component", () => {
  it("should render properly normal component", () => {
    const { getByTestId } = render(
      <RangeComponent mode="normal" min={1} max={100} fixedValues={undefined} onChange={() => {}} />
    );
    expect(getByTestId("range-component")).toBeTruthy();
  });

  it("should render properly fixed component", () => {
    const { getByTestId } = render(
      <RangeComponent
        mode="fixed"
        min={1}
        max={100}
        fixedValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        onChange={() => {}}
      />
    );
    expect(getByTestId("range-component")).toBeTruthy();
  });
});
