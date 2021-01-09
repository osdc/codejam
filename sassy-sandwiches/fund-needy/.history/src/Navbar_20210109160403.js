import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h1>FundNeedy</h1>
      </div>
      <div className="navbar_login_signup">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
}

// tagline: Today is your opportunity to build the tomorrow of someone.
export default Navbar;
