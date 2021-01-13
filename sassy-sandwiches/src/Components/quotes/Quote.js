import React from "react";
import "./Quote.css";

function Quote({ name, quote, url }) {
  return (
    <div className="quote">
      <div className="col-md-6 col-lg-3  col-xs-6">
        <div className="speaker__card" data-state="#about">
          <div className="card-header">
            <img
              className="card-avatar lazy"
              src={url}
              data-src={url}
              alt="avatar"
            />
            <h1 className="card-fullname">{name}</h1>
          </div>
          <div className="card-main">
            <div className="card-section is-active" id="about">
              <div className="card-content">
                <div className="card-subtitle">
                  <h2>Quote</h2>
                </div>
                <q className="card-desc">{quote}</q>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
