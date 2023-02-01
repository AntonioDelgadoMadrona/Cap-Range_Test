// DEPENDENCIES
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// COMPONENTS
import Range from "./components/RangeComponent/range.component";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const Layout = () => {
  return (
    <>
      <h1>Welcome to the app</h1>
      <Outlet />
    </>
  );
};
