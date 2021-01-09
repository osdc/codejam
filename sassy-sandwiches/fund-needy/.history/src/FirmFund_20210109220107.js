import React from "react";
import "./FirmFund.css";

function FirmFund() {
  return (
    <div className="firmFund">
      <div className="firmFund_image">
        <img
          src="https://i.pinimg.com/originals/ba/fc/15/bafc1525cef9606c5c064694ca8e60fb.jpg"
          alt=""
        />
      </div>
      <div className="firmFund_about">
        <h2>About our Firm</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, porro
          fuga itaque ullam sunt, quam voluptatum beatae, reprehenderit ratione
          accusamus in? Doloremque eaque veniam accusamus, molestiae fuga eum
          illum. Quia consectetur id omnis eius expedita, rem facilis iure
          similique praesentium voluptate nisi dolore explicabo quos totam porro
          ab atque maiores.
        </p>
      </div>
      <div className="firmFund_need">
        <h2>Why do we need Funds?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi fugit,
          corrupti qui odit dolores error ullam maxime unde autem amet natus rem
          facilis excepturi impedit expedita sed et deserunt voluptas!
        </p>
      </div>
      <div className="firmFund_fund">
        <h2>Fund Req: $2000</h2>
        <button>Fund</button>
      </div>
    </div>
  );
}

export default FirmFund;
