// DEPENDENCIES
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// COMPONENTS
import Range from "./range/range.component";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/exercise1"
          element={<Range min={1} max={1000} mode="normal" onChange={() => console.log("onChange")} />}
        />
        <Route
          path="/exercise2"
          element={
            <Range
              min={1}
              max={1000}
              mode="fixed"
              onChange={() => console.log("onChange")}
              fixedValues={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
