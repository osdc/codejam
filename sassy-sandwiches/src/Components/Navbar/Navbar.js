import React, { useState } from "react";
import "./Navbar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { Button } from "@material-ui/core";

function Navbar() {
  const History = useHistory();
  const { logout, currentUser } = useAuth();

  const [toggle, setToggle] = useState(false);
  const [sidebarClass, setSidebarClass] = useState("navbar_sidebar");

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

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      setSidebarClass("navbar_sidebar open");
    } else {
      setSidebarClass("navbar_sidebar");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h1 onClick={() => History.push("/")}>FundNeedy</h1>
      </div>
      <div className="navbar_sidebar_button" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {toggle && (
        <div className={sidebarClass}>
          {currentUser ? (
            <ul>
              <li>
                <button onClick={handleToggle}>Close</button>
              </li>
              <li>
                <button onClick={handleNeedFunds}>Need Funds?</button>
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
                <button onClick={handleToggle}>Close</button>
              </li>
              <li>
                <button onClick={handleLogin}>Login</button>
              </li>
              <li>
                {" "}
                {!currentUser && <button onClick={handleSignup}>Signup</button>}
              </li>
            </ul>
          )}
        </div>
      )}
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
