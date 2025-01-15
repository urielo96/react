import React, { useState } from "react";
import './Card.css';

export function Card({ title, description, image, price, duration }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    console.log("Mouse entered");
  };

  const handleMouseLeave = () => {
    console.log("Mouse left");
  };

  const handleFocus = () => {
    console.log("Input focused");
  };

  const handleBlur = () => {
    console.log("Input blurred");
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>$ {price}</p>
      <p>{duration}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
      {showDetails && (
        <div>
          <h3>Detalles</h3>
          <p>Detalles del diplomado</p>
        </div>
      )}

      <input type="text" onFocus={handleFocus} onBlur={handleBlur} placeholder="Focus me" />
    </div>
  );
}
