import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Donation from "./components/Pages/Donation";
import Donations from "./components/Pages/Donations";
import Reservation from "./components/Pages/Reservation";
import Reservations from "./components/Pages/Reservations";
import Search from "./components/Pages/Search";
import Main from "./components/Pages/Main";
import Layout from "./components/Layout";
import './App.scss';

import { Navbar, Container, Nav, Carousel } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
            {/* <Route exact path='/' component={Main}/> */}
            <Route path='/donation' component={Donation}/>
            <Route path='/donations' component={Donations}/>
            <Route path='/reservation' component={Reservation}/>
            <Route path='/reservations' component={Reservations}/>
            <Route path='/Search' component={Search}/>
            <Route component={Error}/>
        </Router>
        <header>HELLO</header>
      </Layout>
    </React.Fragment>
  );
}

export default App;
