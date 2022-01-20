import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Donation from "./components/Pages/Donation";
import Donations from "./components/Pages/Donations";
import Reservation from "./components/Pages/Reservation";
import Reservations from "./components/Pages/Reservations";
import Search from "./components/Pages/Search";
import './App.scss';
import Main from "./components/Pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/donation/new' element={<Donation />}/>
          <Route path='/donations' element={<Donations />}/>
          <Route path='/reservation/new' element={<Reservation />}/>
          <Route path='/reservations' element={<Reservations />}/>
          
        </Routes>
      </Router>
    </div>
  );
}

// function Home () {
//   return (
//     <h2>I am here</h2> 
//   )
// }

export default App;
