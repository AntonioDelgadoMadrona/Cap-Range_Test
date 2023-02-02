// DEPENDENCIES
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import Layout from "./components/Layout/layout.component";
import Range from "./components/Range/range.component";

// DATA
const receivedData = {
  normalRange: {
    min: 1,
    max: 100,
  },
  fixedRange: {
    min: 1,
    max: 1000,
    fixedValues: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
};

// HANDLERS
const handleChangeSelection = (min: number, max: number): void => {
  console.log("The user selected a range between ", min, " and ", max);
  // do something with the data
};
const handleUpdateLabelValueNormalRange = (label: "min" | "max", value: any): void => {
  console.log("The user updated the ", label, " label with the value ", value);
  // do something with the data
};
const handleUpdateLabelValueFixedRange = (label: "min" | "max", value: any): void => {
  console.log("The user updated the ", label, " label with the value ", value);
  // do something with the data
};

const App: React.FC<{}> = (): React.ReactElement => {
  const { normalRange, fixedRange } = receivedData;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="exercise1"
            element={
              <Range
                min={normalRange.min}
                max={normalRange.max}
                mode="normal"
                handleChangeSelection={handleChangeSelection}
                handleUpdateLabelValue={handleUpdateLabelValueNormalRange}
              />
            }
          />
          <Route
            path="exercise2"
            element={
              <Range
                min={fixedRange.min}
                max={fixedRange.max}
                fixedValues={fixedRange.fixedValues}
                mode="fixed"
                handleChangeSelection={handleChangeSelection}
                handleUpdateLabelValue={handleUpdateLabelValueFixedRange}
              />
            }
          />
          <Route path="/" element={<Navigate replace to="/exercise1" />} />
          <Route path="*" element={<Navigate replace to="/exercise1" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
