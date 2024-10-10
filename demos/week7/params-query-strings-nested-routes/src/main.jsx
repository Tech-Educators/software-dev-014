import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import our provider from react-router-dom
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
//I am nesting my App component into the BrowserRouter provider component, so my App has access to routes and paths
