import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function ForgotPassword() {
  const [email, setEmail] = useState();

  const { resetPassword } = useAuth();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your Inbox");
    } catch {
      return setMessage("Failed to Reset Password!");
    }

    setLoading(false);
  }
  return (
    <div className="login">
      <div className="login_container">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          {message && <p>{message}</p>}

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>
            <Link to="/login">Login</Link>
          </p>
          <div className="login_clearfix">
            <button>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
