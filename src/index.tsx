// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom/client";

// COMPONENTS
import App from "./components/app";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
