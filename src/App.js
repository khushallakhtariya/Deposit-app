import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home.js";
import Deposits from "./components/Deposits";
import Offers from "./components/Offers";
import Payments from "./components/Payments";
import Settings from "./components/Settings";
import Packages from "./components/Packages.js";

function App() {
  return (
    <Router>
      <Home>
        <Routes>
          <Route path="/" />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </Home>
    </Router>
  );
}

export default App;
