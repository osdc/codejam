import React from "react";
import "./Needy.css";
import { useHistory } from "react-router-dom";

function Needy({ firm_name, amount, need_funds, firm_image }) {
  const History = useHistory();
  const handleFund = (e) => {
    History.push("/firmname");
  };

  return (
    <div className="needy">
      <div className="needy_header">
        <h1>{firm_name}</h1>
        <img src={firm_image} alt="" />
      </div>
      <div className="needy_body">
        <p>{need_funds}</p>
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
