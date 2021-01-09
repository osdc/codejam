import React from "react";
import "./Needy.css";

function Needy() {
  return (
    <div className="needy">
      <div className="needy_header">
        <h1>Apollo Builders</h1>
        <img
          src="https://i.pinimg.com/originals/ba/fc/15/bafc1525cef9606c5c064694ca8e60fb.jpg"
          alt=""
        />
      </div>
      <div className="needy_body">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam debitis
          doloribus maiores qui veniam atque corrupti? Dolorem aliquid repellat,
          debitis officia sunt quasi provident, autem tenetur recusandae sit in
          illo?
        </p>
      </div>
      <div className="needy_footer">
        <p>
          <strong>Fund Req: $2000</strong>
        </p>
        <button>Fund </button>
      </div>
    </div>
  );
}

export default Needy;
