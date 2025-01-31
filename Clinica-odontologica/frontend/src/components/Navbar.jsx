import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaUserInjured, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo ou título */}
        <Link to="/" className="navbar-logo">
          <FaHome className="navbar-icon" /> Clínica Odontológica
        </Link>

        {/* Menu principal */}
        <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMobileMenu}>
              <FaHome className="nav-icon" /> Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/funcionarios" className="nav-link" onClick={toggleMobileMenu}>
              <FaUsers className="nav-icon" /> Funcionários
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pacientes" className="nav-link" onClick={toggleMobileMenu}>
              <FaUserInjured className="nav-icon" /> Pacientes
            </Link>
          </li>
        </ul>

        {/* Ícone do menu mobile */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;