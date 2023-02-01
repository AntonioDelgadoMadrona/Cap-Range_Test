// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom/client";
// COMPONENTS
import App from "./app";

const rootElement = document.getElementById("app")!;
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
