import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Donation from "./pages/Donation"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/donation/new" element={<Donation/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

