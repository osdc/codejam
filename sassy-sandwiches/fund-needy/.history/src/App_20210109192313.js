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
      <Router>
        <Navbar />
        <Switch>
          <Route exact="/" component={Showcase} />
          <Route path="/needies" component={Needies} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
