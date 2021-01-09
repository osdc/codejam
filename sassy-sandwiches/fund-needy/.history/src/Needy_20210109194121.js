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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          cupiditate inventore nobis nesciunt sint fuga sit dolorem nam, illo
          delectus? Porro odio aliquid voluptate laboriosam dolor? Consectetur,
          aliquam quam at dolore rerum veritatis labore similique ipsum
          explicabo officiis. At eligendi distinctio assumenda necessitatibus.
          Officiis vitae suscipit consectetur architecto! Amet, adipisci?
        </p>
      </div>
      <div className="needy_footer">
        <p>$2000</p>
        <button>Fund </button>
      </div>
    </div>
  );
}

export default Needy;
