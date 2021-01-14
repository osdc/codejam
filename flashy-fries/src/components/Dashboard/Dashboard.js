import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "../AuthContext";
import { db } from "../firebase";
import "./Dashboard.css";

function Dashboard() {
  const [topics, setTopics] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [docId, setDocId] = useState("");
  const [error, setError] = useState("");

  const { register, handleSubmit, errors } = useForm();

  const { currentUser } = useAuth();
  const userEmail = currentUser.email;
  const userId = currentUser.uid;

  function storeInDb(topics) {
    db.collection("studydatedata")
      .add({
        userId: userId,
        email: userEmail,
        topics: topics,
      })
      .then((doc) => {
        console.log(doc);
        setDocId(doc.id);
        setIsEditing(false);
      })
      .catch((err) => {
        setError("Error adding data to the database: " + err);
      });
  }

  function getDataFromDb() {
    db.collection("studydatedata")
      .where("userId", "==", userId)
      .get()
      .then((result) => {
        result.forEach((val) => {
          setTopics(val.data().topics);
          setDocId(val.id);
        });
      })
      .catch((err) => {
        setError("Error getting data from the database: " + err);
      });
  }

  function changeTopics(topics) {
    db.collection("studydatedata").doc(docId).update({
      topics: topics,
    });
    setIsEditing(false);
  }

  function onSubmit(data) {
    const topicsSelected = data.topic;
    setTopics(topicsSelected);
    if (docId !== "") changeTopics(topicsSelected);
    else storeInDb(topicsSelected);
  }

  useEffect(() => {
    getDataFromDb();
  }, []);

  return (
    <div>
      <h1 className="heading">WELCOME TO STUDY DATE</h1>
      <h2>&nbsp;&nbsp;&nbsp;Your Email: {userEmail}</h2>
      <div>
        <h1 className="heading1">&nbsp;&nbsp;List of Topics you have selected</h1>
      </div>
      {isEditing ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="select">
              <label className="container">
                One
                <input
                  type="checkbox"
                  name="topic"
                  value="one"
                  ref={register}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div>
              <label className="container">
                Two
                <input
                  type="checkbox"
                  name="topic"
                  value="two"
                  ref={register}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div>
              <label className="container">
                Three
                <input
                  type="checkbox"
                  name="topic"
                  value="three"
                  ref={register}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div>
              <label className="container">
                Four
                <input
                  type="checkbox"
                  name="topic"
                  value="four"
                  ref={register}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <ul>
          {topics.map((topic) => {
            return <li key={topic}>{topic}</li>;
          })}
        </ul>
      )}
      <button className="btn" onClick={() => setIsEditing((value) => !value)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>
  );
}

export default Dashboard;
