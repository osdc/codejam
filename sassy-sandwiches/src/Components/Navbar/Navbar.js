import React from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../AuthContext";

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

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h1>FundNeedy</h1>
      </div>
      <div className="navbar_login_signup">
        {currentUser ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
        {!currentUser && <button onClick={handleSignup}>Signup</button>}
      </div>
    </div>
  );
}

export default Navbar;
