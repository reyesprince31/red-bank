import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CustomerProvider } from "./contexts/customerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomerProvider>
      <App />
    </CustomerProvider>
  </React.StrictMode>
);
