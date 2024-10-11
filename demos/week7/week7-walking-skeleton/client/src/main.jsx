import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//we need a routing provider in here
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
