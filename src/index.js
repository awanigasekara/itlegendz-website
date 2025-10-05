import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CareerPage from "./Career"; // ✅ import Career.js
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Create root element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/career" element={<CareerPage />} />  {/* ✅ Career route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
