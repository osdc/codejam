import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useAuth();
  const History = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await login(email, password);
      History.push("/");
    } catch {
      return setError("Failed to login");
    }

    setLoading(false);
  }

  const handleCancel = () => {
    History.push("/");
  };

  return (
    <div className="login">
      <div className="login_container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}

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
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <Link to="/forgotPassword">Forgot Password ?</Link>
          </p>
          <div className="login_clearfix">
            <button onClick={handleCancel} className="cancelbtn">
              Cancel
            </button>
            <button disabled={loading} className="loginbtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
