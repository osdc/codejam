import React, { useState, useEffect } from "react";
import "./NeedFunds.css";
import { db, storage } from "../../firebase";
import { useAuth } from "../../AuthContext";

function NeedFunds() {
  const [firmName, setFirmName] = useState();
  const [firmImage, setFirmImage] = useState();
  const [aboutFirm, setAboutFirm] = useState();
  const [needFunds, setNeedFunds] = useState();
  const [amount, setAmount] = useState();
  const [needies, setNeedies] = useState([]);
  const [id, setId] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setNeedies(
        snapshot.docs.map((doc) => {
          return { id: doc.id, needy: doc.data() };
        })
      );
    });
  }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFirmImage(e.target?.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (var i = 0; i < needies.length; ++i) {
      if (needies[i].needy.email === currentUser.email) {
        setId(needies[i].id);
        break;
      }
    }

    const uploadTask = storage.ref(`images/${firmImage.name}`).put(firmImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        console.log(err);
        alert(err.message);
      },
      () => {
        console.log(firmImage.name);
        storage
          .ref("images")
          .child(firmImage.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("users").doc(id).update({
              firm_name: firmName,
              firm_image: url,
              about_firm: aboutFirm,
              need_funds: needFunds,
              amount: amount,
            });
          });
      }
    );

    console.log(needies);
    console.log(firmImage);
  };

  return (
    <div className="needFunds">
      <div className="needFunds_main">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firmName">
            <b>Firm Name</b>{" "}
          </label>
          <br />
          <input
            type="text"
            required
            placeholder="Name of your firm"
            value={firmName}
            onChange={(e) => setFirmName(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="aboutFirm">
            <b>About Firm</b>
          </label>
          <br />
          <textarea
            name="aboutFirm"
            cols="30"
            rows="10"
            value={aboutFirm}
            onChange={(e) => setAboutFirm(e.target.value)}
          ></textarea>
          <br />
          <label htmlFor="needFunds">
            <b>Why Need funds?</b>
          </label>
          <br />
          <textarea
            name="needFunds"
            cols="30"
            rows="10"
            value={needFunds}
            onChange={(e) => setNeedFunds(e.target.value)}
          ></textarea>
          <br />
          <label htmlFor="firmImage">
            <b>Firm Image</b>
          </label>
          <br />
          <input type="file" onChange={handleChange} />
          <br />
          <label htmlFor="amount">
            <b>Amount Needed ($)</b>
          </label>
          <br />
          <input
            type="number"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />{" "}
          <br />
          <button>Request for Funds!</button>
        </form>
      </div>
    </div>
  );
}

export default NeedFunds;
