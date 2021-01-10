import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import Needies from "./Components/Needies/Needies";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirmFund from "./Components/Firm/FirmFund";
import Success from "./Components/Firm/Success";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Showcase} />
          <Route path="/needies" component={Needies} />
          <Route path="/firmname" component={FirmFund} />
          <Route path="/firmname/success" component={Success} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
