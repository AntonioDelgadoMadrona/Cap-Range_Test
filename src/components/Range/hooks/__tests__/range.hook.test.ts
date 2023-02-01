// DEPENDENCIES
import React from "react";
import { renderHook } from "../../../../utils/test-utils";
// HOOK
import useRangeHook from "../range.hook";
// MOCKS
jest.mock("../../handlers/range.handlers.ts", () => {
  return jest.fn(() => ({
    handleMinValueChange: jest.fn(),
    handleMaxValueChange: jest.fn(),
    handleMinMouseDown: jest.fn(),
    handleMaxMouseDown: jest.fn(),
    handleMouseMove: jest.fn(),
    handleMouseUp: jest.fn(),
  }));
});

describe("Range / Hook", () => {
  it("should provide hook data", () => {
    const hookReturnProps = [
      "handleMinValueChange",
      "handleMaxValueChange",
      "handleMinMouseDown",
      "handleMaxMouseDown",
      "handleMouseMove",
      "handleMouseUp",
      "setRangeWidth",
      "maxValue",
      "minValue",
      "maxPosition",
      "minPosition",
    ];
    const { result } = renderHook(() =>
      useRangeHook({
        mode: "normal",
        min: 0,
        max: 100,
        fixedValues: undefined,
        handleChangeSelection: jest.fn(),
      })
    );

    const keys = Object.keys(result.current);
    expect(keys.length).toBe(hookReturnProps.length);
    hookReturnProps.forEach((data) => expect(keys.includes(data)));
  });
});
