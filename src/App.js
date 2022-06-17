import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Dishes from "./containers/Dishes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
