import React from "react";
import logo from "./logo.svg";

function Loader() {
  return (
    <div className="loader">
      <img className="spinner" src={logo} alt="loader" />
    </div>
  );
}

export default Loader;
