import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path='/' component={Main}/>
          
          {/* <Route path='/donation/new' component={Donation}/>
          <Route path='/donations' component={Donations}/>
          <Route path='/reservation/new' component={Reservation}/>
          <Route path='/reservations' component={Reservations}/>
          <Route path='/Search' component={Search}/>
          <Route component={Error}/> */}
        </Switch>
      </Router>
    </div>
  );
}

function Home () {
  return (
    <h2>I am here</h2> 
  )
}

export default App;
