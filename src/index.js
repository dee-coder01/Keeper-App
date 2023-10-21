import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
