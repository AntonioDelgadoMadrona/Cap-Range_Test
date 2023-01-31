// DEPENDENCIES
import React from "react";
import { render as rtlRender } from "@testing-library/react";

const render = (
  ui: React.ReactElement,
  { initialState = {}, ...renderOptions } = {}
): any => {
  const Wrapper = ({ children }: any): React.ReactElement => {
    return children;
  };

  const rendered = rtlRender(ui, { wrapper: Wrapper, ...renderOptions });

  return {
    ...rendered,
    rerender: (ui: React.ReactElement, options: any) =>
      render(ui, { container: rendered.container, ...options }),
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
