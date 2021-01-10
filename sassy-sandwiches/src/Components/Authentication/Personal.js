import React, { useRef, useState } from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { db } from "../../firebase";

function Personal() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const { updatePassword, updateEmail, currentUser } = useAuth();
  const History = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confPassword) {
      return setError("Passwords do not match");
    }

    const promises = [];
    if (email !== currentUser.email && email !== "") {
      promises.push(updateEmail(email));
    }
    if (password !== currentUser.password && password !== "") {
      promises.push(updatePassword(password));
    }

    Promise.all(promises)
      .then(() => {
        console.log(db.collection("users").doc(currentUser.email));

        History.push("/");
      })
      .catch((err) => {
        console.log("Failed to update Details: ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="signup">
      <div className="signup_container">
        <h1>Personal Account Details</h1>
        <form onSubmit={handleSubmit}>
          <p>Keep entry blank to not update</p>
          <hr />
          {error && <p>{error}</p>}
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter New Name"
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
            placeholder="Enter New Email"
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
            <Link to="/">Cancel</Link>
          </p>
          <div className="signup_clearfix">
            <button>Update Details</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Personal;
