import React, { useEffect, useState } from "react";
import "./FirmFund.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function FirmFund() {
  const classes = useStyles();
  let url = window.location.pathname;
  let arr = url.split("/");
  const id = arr[1];

  const [open, setOpen] = useState(false);
  const [firm_image, setFirm_image] = useState("");
  const [firm_name, setFirm_name] = useState("");
  const [about_firm, setAbout_firm] = useState("");
  const [need_funds, setNeed_funds] = useState("");
  const [amount, setAmount] = useState(0);
  const [filled_amount, setFilled_amount] = useState("");

  useEffect(() => {
    db.collection("users")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setFirm_image(doc.data().firm_image);
          setAbout_firm(doc.data().about_firm);
          setNeed_funds(doc.data().need_funds);
          setFirm_name(doc.data().firm_name);
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
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    db.collection("users")
      .doc(id)
      .update({ amount: amount - filled_amount });
    setFilled_amount("");
  };

  return (
    <div className="firmFund">
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>Thanks for Donation!</h2>
            <p>
              You have helped {firm_name} by ${filled_amount}
            </p>
          </div>
        </Fade>
      </Modal>

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
        <h2>
          Fund Req: ${amount - filled_amount < 0 ? 0 : amount - filled_amount}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            required
            placeholder="Enter the Amount..."
            min={0}
            max={amount}
            value={filled_amount}
            onChange={(e) => setFilled_amount(e.target.value)}
          />
          <button
            onClick={handleOpen}
            disabled={!filled_amount || filled_amount > amount}
          >
            Fund
          </button>
        </form>
      </div>
    </div>
  );
}

export default FirmFund;
