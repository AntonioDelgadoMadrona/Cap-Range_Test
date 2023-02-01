// DEPENDENCIES
import React from "react";
import { render } from "../../../utils/test-utils";
import { BrowserRouter } from "react-router-dom";
// COMPONENTS
import LayoutComponent from "../layout.component";

describe("Layout Component", () => {
  it("should render properly LayoutComponent", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LayoutComponent />
      </BrowserRouter>
    );
    expect(getByTestId("layout-component")).toBeTruthy();
  });
});
