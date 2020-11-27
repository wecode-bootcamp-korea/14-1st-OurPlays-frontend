import React from "react";
import loading from "./loading2.gif";
import "./Loading.scss";

export default () => {
  return (
    <div className="loading">
      <img src={loading} alt="loading" />
    </div>
  );
};
