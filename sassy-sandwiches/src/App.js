import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import Needies from "./Components/Needies/Needies";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirmFund from "./Components/Firm/FirmFund";
import { AuthProvider } from "./AuthContext";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Personal from "./Components/Authentication/Personal";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import NeedFunds from "./Components/Firm/NeedFunds";
import Notification from "./Components/Firm/Notification";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Showcase} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/needies" component={Needies} />
        <PrivateRoute path="/personal" component={Personal} />
        <Route path="/notifications" component={Notification} />
        <Route path="/needFunds" component={NeedFunds} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/:firm_id" component={FirmFund} />
      </Switch>
      <Footer />
    </AuthProvider>
  );
}

export default App;
