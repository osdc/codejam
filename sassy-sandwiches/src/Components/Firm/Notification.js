import React, { useState, useEffect } from "react";
import "./Notification.css";
import { auth, db } from "../../firebase";
import firebase from "firebase";

function Notification() {
  const [people_contributed, setPeopleContributed] = useState([]);
  const [displayArr, setDisplayArr] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(auth.currentUser.uid)
          .get()
          .then((doc) => {
            if (doc.data().people_contributed.length > 0) {
              setPeopleContributed(doc.data().people_contributed.reverse());
              setDisplayArr(doc.data().people_contributed.reverse());
            }
          });
      } else {
        console.log("No user!");
      }
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    var new_input = e.target.value;

    setInput(new_input);

    setDisplayArr(
      people_contributed.filter((person) => {
        return (
          person.contri_data.name
            .toLowerCase()
            .indexOf(new_input.toLowerCase()) !== -1
        );
      })
    );
  };

  return (
    <div className="notification">
      <h1>{displayArr.length} People who helped you 👍 </h1>
      <input
        type="text"
        placeholder="Search here..."
        value={input}
        onChange={handleChange}
      />
      {displayArr.map((person) => {
        return (
          <div className="notification_person" key={person.id}>
            <div>
              <strong>Contributer Name: </strong>
              <p>{person.contri_data.name}</p>
            </div>
            <div>
              <strong>Contributer Email: </strong>
              <p>{person.contri_data.email}</p>
            </div>
            <div>
              <strong>Amount Contributed: </strong>
              <p>${person.contri_amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Notification;
