import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import Needies from "./Components/Needies/Needies";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirmFund from "./Components/Firm/FirmFund";
import Success from "./Components/Firm/Success";
import { AuthProvider } from "./AuthContext";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Showcase} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/needies" component={Needies} />
            <Route path="/:firm_id" component={FirmFund} />
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
