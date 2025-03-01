import React from 'react';

function Card({ icon, title, subtitle, description, subtitleColor }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={icon} alt="Card Icon" className="card-icon" />
        <div className="card-holder">
            <h2 className="card-title">{title}</h2>
            <h4 style={{ color: subtitleColor }} className="card-subtitle">{subtitle}</h4>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
 
export default Card;