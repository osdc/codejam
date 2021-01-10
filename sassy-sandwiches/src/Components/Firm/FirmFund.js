import React, { useEffect, useState } from "react";
import "./FirmFund.css";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase";

function FirmFund() {
  const History = useHistory();
  let url = window.location.pathname;
  let arr = url.split("/");
  const id = arr[1];

  const [firm_image, setFirm_image] = useState();
  const [about_firm, setAbout_firm] = useState();
  const [need_funds, setNeed_funds] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    db.collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setFirm_image(doc.data().firm_image);
          setAbout_firm(doc.data().about_firm);
          setNeed_funds(doc.data().need_funds);
          setAmount(doc.data().amount);
        } else {
          console.log("No such firm!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    History.push("/firmname/success");
  };

  return (
    <div className="firmFund">
      <div className="firmFund_image">
        <img src={firm_image} alt="" />
      </div>
      <div className="firmFund_about">
        <h2>About our Firm</h2>
        <p>{about_firm}</p>
      </div>
      <div className="firmFund_need">
        <h2>Why do we need Funds?</h2>
        <p>{need_funds}</p>
      </div>
      <div className="firmFund_fund">
        <h2>Fund Req: ${amount}</h2>
        <form onSubmit={handleSubmit}>
          <input type="number" required placeholder="Enter the Amount..." />
          <button>Fund</button>
        </form>
      </div>
    </div>
  );
}

export default FirmFund;
