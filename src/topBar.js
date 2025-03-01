import React from 'react';

function TopBar() {
  return (
    <div className="topbar">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/white-logo.svg`} alt="" />
        <span className="brand-name">IMPACTABLE</span>
      </div>
      <button className="contact-btn">Contact Us</button>
    </div>
  );
}

export default TopBar;