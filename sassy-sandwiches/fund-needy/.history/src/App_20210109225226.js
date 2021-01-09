import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import Needies from "./Needies";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirmFund from "./FirmFund";
import Success from "./Success";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Showcase} />
          <Route path="/needies" component={Needies} />
          <Route path="/firmname" component={FirmFund} />
          <Route path="/firmname/success" component={Success}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
