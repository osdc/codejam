import React, { useState, useEffect } from "react";
import "./Needy.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../AuthContext";

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

function Needy({ firm_name, amount, need_funds, firm_image, firm_id }) {
  const History = useHistory();
  const { currentUser } = useAuth();
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleFund = (e) => {
    if (!currentUser) {
      setOpen(true);
    } else {
      History.push(`/${firm_id}`);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const truncate = (str) => {
    str = str.toString();
    return str.length <= 200 ? str : str.substring(0, 200) + "...";
  };

  return (
    <div className="needy">
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
            <h2 style={{ padding: "20px" }}>Please Login/SignUp to fund!</h2>
          </div>
        </Fade>
      </Modal>

      <div className="needy_header">
        <h1>{firm_name}</h1>
        <img src={firm_image} alt="" />
      </div>
      <div className="needy_body">
        <p style={{ textAlign: "left" }}>{truncate(need_funds)}</p>
      </div>
      <div className="needy_footer">
        <p>
          <strong>Fund Req: ${amount}</strong>
        </p>
        <button onClick={handleFund}>Fund</button>
      </div>
    </div>
  );
}

export default Needy;
