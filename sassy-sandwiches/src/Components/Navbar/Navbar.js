import React from "react";
import "./Navbar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { Button } from "@material-ui/core";
import { auth } from "../../firebase";

function Navbar() {
  const History = useHistory();
  const { logout, currentUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    History.push("/login");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    History.push("/signup");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };

  const handlePersonal = async (e) => {
    e.preventDefault();
    alert("Login again to edit details!");
    History.push("/personal");
  };

  const handleNeedFunds = (e) => {
    e.preventDefault();
    History.push("/needFunds");
  };

  const handleNotification = (e) => {
    e.preventDefault();
    History.push("/notifications");
  };

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h1 onClick={() => History.push("/")}>FundNeedy</h1>
      </div>
      {/* <div className="navbar_sidebar">
        <div className="navbar_sidebar_spans">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {currentUser ? (
          <ul>
            <li>
              <button onClick={handleNeedFunds} style={{ width: "200%" }}>
                Need Funds?
              </button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
            <li>
              <Button onClick={handlePersonal}>
                <AccountCircleIcon fontSize="large" />
              </Button>
            </li>
            <li>
              <Button onClick={handleNotification}>
                <NotificationsIcon fontSize="large" />
              </Button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <button onClick={handleLogin}>Login</button>
            </li>
            <li>
              {" "}
              {!currentUser && <button onClick={handleSignup}>Signup</button>}
            </li>
          </ul>
        )}
      </div> */}
      <div className="navbar_login_signup">
        {currentUser ? (
          <div className="navbar_logout">
            <button onClick={handleNeedFunds} style={{ width: "200%" }}>
              Need Funds?
            </button>
            <button onClick={handleLogout}>Logout</button>
            <Button onClick={handlePersonal}>
              <AccountCircleIcon fontSize="large" />
            </Button>
            <Button onClick={handleNotification}>
              <NotificationsIcon fontSize="large" />
            </Button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
        {!currentUser && <button onClick={handleSignup}>Signup</button>}
      </div>
    </div>
  );
}

export default Navbar;
