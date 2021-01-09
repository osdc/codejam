import React, { useEffect, useState } from "react";
import "./Needies.css";
import Needy from "./Needy";
import { db } from "./firebase";

function Needies() {
  const [needies, setNeedies] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="needies">
      <div className="needies_headline">
        <h1>We need Funds!</h1>
        <Needy />
        <Needy />
        <Needy />
        <Needy />
      </div>
    </div>
  );
}

export default Needies;
