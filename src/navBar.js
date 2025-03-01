import React, { useState } from "react";

function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item active">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item dropdown" onMouseEnter={() => toggleDropdown("investment")} onMouseLeave={() => toggleDropdown(null)}>
          Investment <img 
                src={`${process.env.PUBLIC_URL}/dropdown-icon.png`} 
                alt="Dropdown Icon" 
                className="dropdown-icon"
            />
          {openDropdown === "investment" && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Why Impactable?</li>
              <li className="dropdown-item">Impactable EM Products</li>
            </ul>
          )}
        </li>

        <li className="nav-item dropdown" onMouseEnter={() => toggleDropdown("impactIndustry")} onMouseLeave={() => toggleDropdown(null)}>
          Impact Industry Building <img 
                src={`${process.env.PUBLIC_URL}/dropdown-icon.png`} 
                alt="Dropdown Icon" 
                className="dropdown-icon"
            />
          {openDropdown === "impactIndustry" && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Impact Industry Building</li>
              <li className="dropdown-item">Impactable Network</li>
              <li className="dropdown-item">Impactable Technical Assistance</li>
            </ul>
          )}
        </li>

        <li className="nav-item">News & Insights</li>
      </ul>
    </nav>
  );
}

export default NavBar;
