import React from "react";
import "./Card.css";
const Card = ({ q, a }) => {
  return (
    <div className="card">
      <div className="header">
        <h1>Q</h1>
        <p>{q}</p>
      </div>
      <div className="body">
        <h1>A</h1>
        <p>{a}</p>
      </div>
    </div>
  );
};

export default Card;
