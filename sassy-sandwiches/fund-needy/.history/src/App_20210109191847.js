import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import Needies from "./Needies";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>{/* <Route exact="/" component={Showcase} /> */}</Router>
      <Footer />
    </div>
  );
}

export default App;
