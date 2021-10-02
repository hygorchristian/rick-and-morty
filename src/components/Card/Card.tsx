import React from "react";
import { FaSkull } from "react-icons/fa";
import "./style.scss";

function Card() {
  return (
    <div className="card">
      <img src="https://wallpaperaccess.com/full/780744.png" alt="" className="thumbnail" />
      <span className="name">Rick Sanchez</span>
      <div className="info">
        <span>Human</span> - <span>Alive </span>
        <FaSkull />
      </div>
    </div>
  );
}

export default Card;
