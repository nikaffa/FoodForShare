import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import DonationSearch from "./pages/DonationSearch";
import Donations from "./pages/Donations";
import ReservationNew from "./pages/ReservationNew";
import Reservations from "./pages/Reservations";
import DonationEdit from "./pages/DonationEdit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/donation/new" element={<Donation />}></Route>
        <Route path="/donation/search" element={<DonationSearch />}></Route>
        <Route path="/donations" element={<Donations />}></Route>
        <Route path="/reservations/new" element={<ReservationNew />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
