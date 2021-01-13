import { Link } from "react-router-dom";

import { useAuth } from "../AuthContext";
import "./Navbar.css";

function Navbar() {
  const { currentUser, logout } = useAuth();
  return (
    <div className="navbar">
      <Link to="/">Study Date</Link>
      <div className="links">
        {!currentUser ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard"> Dashboard </Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
