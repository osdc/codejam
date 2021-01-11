import React, { useRef, useState, useEffect } from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { useAuth } from "../../AuthContext";
import { db, auth } from "../../firebase";

function Personal() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  useEffect(() => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((user) => {
        setEmail(user.data().email);
        setName(user.data().name);
        setPhone(user.data().phone_num);
        setPassword(user.data().password);
      });
  }, []);

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
      db.collection("users").doc(auth.currentUser.uid).update({
        email: email,
      });
    }
    if (password !== currentUser.password && password !== "") {
      promises.push(updatePassword(password));
      db.collection("users").doc(auth.currentUser.uid).update({
        password: password,
      });
    }
    if (name !== "") {
      db.collection("users").doc(auth.currentUser.uid).update({
        name: name,
      });
    }
    if (phone !== "") {
      db.collection("users").doc(auth.currentUser.uid).update({
        phone_num: phone,
      });
    }

    Promise.all(promises)
      .then(() => {
        alert("Details updated successfully!");
        History.push("/");
      })
      .catch((err) => {
        if (err.code === "auth/requires-recent-login" || err.code === 400) {
          firebase
            .auth()
            .signOut()
            .then(function () {
              alert("Please log in again to update your account.");
            });
        }
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
