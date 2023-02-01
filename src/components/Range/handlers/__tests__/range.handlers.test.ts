// HANDLERS
import RangeHandlers from "../range.handlers";
// INTERFACES
import { RangeHandlersType, RangeHandlersReturnType } from "../interfaces/range-handlers.interface";

describe("Range / Event Handlers", () => {
  const params: RangeHandlersType = {
    min: 0,
    maxValue: 100,
    setMinValue: jest.fn(),
    handleChangeSelection: jest.fn(),
    minValue: 0,
    max: 100,
    setMaxValue: jest.fn(),
    setIsDraggingMin: jest.fn(),
    setIsDraggingMax: jest.fn(),
    isDraggingMin: false,
    rangeWidth: 100,
    maxPosition: 100,
    setMinPosition: jest.fn(),
    mode: "normal",
    fixedValues: null,
    isDraggingMax: false,
    minPosition: 0,
    setMaxPosition: jest.fn(),
  };

  const eventHandlers: RangeHandlersReturnType = RangeHandlers(params);

  beforeEach(() => jest.clearAllMocks());

  it("should handle min value change", () => {
    eventHandlers.handleMinValueChange({ target: { value: 30 } });
    expect(params.setMinValue).toHaveBeenCalled();
    expect(params.setMinValue).toHaveBeenCalledWith(30);
    expect(params.handleChangeSelection).toHaveBeenCalled();
    expect(params.handleChangeSelection).toHaveBeenCalledWith(30, 100);
  });

  it("should handle max value change", () => {
    eventHandlers.handleMaxValueChange({ target: { value: 60 } });
    expect(params.setMaxValue).toHaveBeenCalled();
    expect(params.setMaxValue).toHaveBeenCalledWith(60);
    expect(params.handleChangeSelection).toHaveBeenCalled();
    expect(params.handleChangeSelection).toHaveBeenCalledWith(0, 60);
  });

  it("should handle min mouse down change", () => {
    eventHandlers.handleMinMouseDown();
    expect(params.setIsDraggingMin).toHaveBeenCalled();
    expect(params.setIsDraggingMin).toHaveBeenCalledWith(true);
  });

  it("should handle max mouse down change", () => {
    eventHandlers.handleMaxMouseDown();
    expect(params.setIsDraggingMax).toHaveBeenCalled();
    expect(params.setIsDraggingMax).toHaveBeenCalledWith(true);
  });

  it("should handle mouse up change", () => {
    eventHandlers.handleMouseUp();
    expect(params.setIsDraggingMin).toHaveBeenCalled();
    expect(params.setIsDraggingMin).toHaveBeenCalledWith(false);
    expect(params.setIsDraggingMax).toHaveBeenCalled();
    expect(params.setIsDraggingMax).toHaveBeenCalledWith(false);
  });

  it("should handle mouse up change when isDragginMin is true and mode is normal", () => {
    const uParams: RangeHandlersType = {
      ...params,
      isDraggingMin: true,
      isDraggingMax: false,
      rangeWidth: 80,
    };
    const clientX = 86;
    RangeHandlers(uParams).handleMouseMove({ clientX });
    const newPosition = clientX - uParams.rangeWidth;
    expect(uParams.setMinPosition).toHaveBeenCalled();
    expect(uParams.setMinPosition).toHaveBeenCalledWith(newPosition);
    expect(uParams.setMinValue).toHaveBeenCalled();
    expect(uParams.setMinValue).toHaveBeenCalledWith(
      (newPosition / uParams.rangeWidth) * (uParams.max - uParams.min) + uParams.min
    );
    expect(uParams.handleChangeSelection).toHaveBeenCalled();
    expect(uParams.handleChangeSelection).toHaveBeenCalledWith(
      (newPosition / uParams.rangeWidth) * (uParams.max - uParams.min) + uParams.min,
      uParams.maxValue
    );
  });

  it("should handle mouse up change when isDragginMin is true and mode is fixed", () => {
    const uParams: RangeHandlersType = {
      ...params,
      isDraggingMin: true,
      isDraggingMax: false,
      rangeWidth: 80,
      mode: "fixed",
      fixedValues: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    };
    const clientX = 86;
    RangeHandlers(uParams).handleMouseMove({ clientX });
    const newPosition = clientX - uParams.rangeWidth;
    expect(uParams.setMinPosition).toHaveBeenCalled();
    expect(uParams.setMinPosition).toHaveBeenCalledWith(newPosition);

    const closestValue = uParams.fixedValues?.reduce((prev: number, curr: number) =>
      Math.abs(curr - uParams.min) < Math.abs(prev - uParams.min) ? curr : prev
    );
    expect(uParams.setMinValue).toHaveBeenCalled();
    expect(uParams.setMinValue).toHaveBeenCalledWith(closestValue);
    expect(uParams.handleChangeSelection).toHaveBeenCalled();
    expect(uParams.handleChangeSelection).toHaveBeenCalledWith(closestValue, uParams.maxValue);
  });

  it("should handle mouse up change when isDragginMax is true and mode is normal", () => {
    const uParams: RangeHandlersType = {
      ...params,
      isDraggingMin: false,
      isDraggingMax: true,
      rangeWidth: 80,
    };
    const clientX = 86;
    RangeHandlers(uParams).handleMouseMove({ clientX });
    const newPosition = clientX - uParams.rangeWidth;
    expect(uParams.setMaxPosition).toHaveBeenCalled();
    expect(uParams.setMaxPosition).toHaveBeenCalledWith(newPosition);
    expect(uParams.setMaxValue).toHaveBeenCalled();
    expect(uParams.setMaxValue).toHaveBeenCalledWith(
      (newPosition / uParams.rangeWidth) * (uParams.max - uParams.min) + uParams.min
    );
    expect(uParams.handleChangeSelection).toHaveBeenCalled();
    expect(uParams.handleChangeSelection).toHaveBeenCalledWith(
      uParams.minValue,
      (newPosition / uParams.rangeWidth) * (uParams.max - uParams.min) + uParams.min
    );
  });

  it("should handle mouse up change when isDragginMax is true and mode is fixed", () => {
    const uParams: RangeHandlersType = {
      ...params,
      isDraggingMin: false,
      isDraggingMax: true,
      rangeWidth: 80,
      mode: "fixed",
      fixedValues: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    };
    const clientX = 86;
    RangeHandlers(uParams).handleMouseMove({ clientX });
    const newPosition = clientX - uParams.rangeWidth;
    expect(uParams.setMaxPosition).toHaveBeenCalled();
    expect(uParams.setMaxPosition).toHaveBeenCalledWith(newPosition);

    const closestValue = uParams.fixedValues?.reduce((prev: number, curr: number) =>
      Math.abs(curr - uParams.max) < Math.abs(prev - uParams.max) ? curr : prev
    );
    expect(uParams.setMaxValue).toHaveBeenCalled();
    expect(uParams.setMaxValue).toHaveBeenCalledWith(closestValue);
    expect(uParams.handleChangeSelection).toHaveBeenCalled();
    expect(uParams.handleChangeSelection).toHaveBeenCalledWith(0, closestValue);
  });
});
