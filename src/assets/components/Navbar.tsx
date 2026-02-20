import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">SMS</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Admissions</li>
        <li>Contact</li>
        <li className="login-btn">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;