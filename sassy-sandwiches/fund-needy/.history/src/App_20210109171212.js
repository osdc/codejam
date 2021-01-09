import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import Needies from "./Needies";

function App() {
  return (
    <div className="App">
      {/* showcase */}
      <Showcase />
      {/* needies */}
      <Needies />
      {/* footer */}
    </div>
  );
}

export default App;
