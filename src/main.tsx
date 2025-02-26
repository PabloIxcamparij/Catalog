import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "@/styles/globals.css";

// Filtrar advertencias específicas
const originalWarn = console.warn;
console.warn = (...args) => {
  const message = args[0];
  if (
    message.includes("Keys") ||
    message.includes("aria-hidden")
  ) {
    return;
  }
  originalWarn(...args);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
