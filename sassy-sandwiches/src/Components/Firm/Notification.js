import React, { useState, useEffect } from "react";
import "./Notification.css";
import { useAuth } from "../../AuthContext";
import { auth, db } from "../../firebase";

function Notification() {
  const [people_contributed, setPeopleContributed] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        setPeopleContributed(doc.data().people_contributed);
      });
  });

  return (
    <div className="notification">
      <h1>People who helped you 👍 </h1>
      {people_contributed.map((person) => {
        return (
          <div className="notification_person">
            <p>
              <strong>Contributer Name: </strong>
              <p>{person.contri_data.name}</p>
            </p>
            <p>
              <strong>Contributer Email: </strong>
              <p>{person.contri_data.email}</p>
            </p>
            <p>
              <strong>Amount Contributed: </strong>
              <p>${person.contri_amount}</p>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Notification;
