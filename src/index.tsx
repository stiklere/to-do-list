import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const root = document.getElementById("root");

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = root ? ReactDOM.createRoot(root) : null;

if (rootElement) {
  rootElement.render(app);
} else {
  console.error("Root element not found");
}
