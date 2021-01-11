import React, { useRef, useState } from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../../AuthContext";
import { db, auth } from "../../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [people_contributed, setPeople_Contributed] = useState([]);

  const { signup, emailVerif } = useAuth();
  const History = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);
      var promise = signup(email, password);
      promise.then(() => {
        var userUid = auth.currentUser.uid;

        db.collection("users").doc(userUid).set({
          email: email,
          name: name,
          phone_num: phone,
          password: password,
          people_contributed: people_contributed,
        });
      });
      History.push("/");
    } catch {
      return setError("Failed to create an account");
    }

    setLoading(false);
  };

  const handleCancel = () => {
    History.push("/");
  };

  return (
    <div className="signup">
      <div className="signup_container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <p>Please fill in this form to create an account.</p>
          <hr />
          {error && <p>{error}</p>}
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="phone_num">
            <b>Phone number</b>
          </label>
          <br />
          <input
            type="number"
            placeholder="Phone no."
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="pasword">
            <b>Password</b>
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label htmlFor="confPassword">
            <b>Repeat Password</b>
          </label>
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <br />
          <p>
            Already have an Account? <Link to="/login">Login</Link>
          </p>
          <div className="signup_clearfix">
            <button type="button" className="cancelbtn" onClick={handleCancel}>
              Cancel
            </button>
            <button disabled={loading} className="signupbtn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
