import React, { useState } from "react";
import "../style/style.css";
import profileImage from "../assets/1707472542470.jpg";
import Table from "./Table";
import { useNavigate, useLocation } from "react-router-dom";

function Home({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeItem, setActiveItem] = useState(location.pathname);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      document.body.classList.toggle('dark-theme', newTheme);
      return newTheme;
    });
  };

  const navItems = [
    {
      href: "/",
      icon: "fa-solid fa-house",
      text: "Home",
      onClick: () => handleNavClick("/"),
    },
    {
      href: "/deposits",
      icon: "fa-regular fa-file",
      text: "Deposits",
      onClick: () => handleNavClick("/deposits"),
    },
    {
      href: "/offers",
      icon: "fa-solid fa-gift",
      text: "Offers",
      onClick: () => handleNavClick("/offers"),
    },
    {
      href: "/payments",
      icon: "fa-solid fa-building-columns",
      text: "Payments",
      onClick: () => handleNavClick("/payments"),
    },
    {
      href: "/settings",
      icon: "fa-solid fa-gear",
      text: "Settings",
      onClick: () => handleNavClick("/settings"),
    },
    {
      href: "/packages",
      icon: "fa-solid fa-truck-fast",
      text: "Packages",
      onClick: () => handleNavClick("/packages"),
    },
  ];

  const handleNavClick = (path) => {
    console.log(`Navigating to: ${path}`);
    setActiveItem(path);
    navigate(path);
  };

  return (
    <div className={`container ${isDarkTheme ? "dark-theme" : ""}`}>
      <header>
        <h1 className="user-name">Khushal Lakhtariya</h1>
        {/* Commented out profile images due to undefined profileImage */}
        <img src={profileImage} alt="Profile" className="profile-image" />
        <img src={profileImage} alt="Profile" className="image2" />
      </header>
      <nav>
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <button
                className={`icon ${activeItem === item.href ? "active" : ""}`}
                onClick={item.onClick}
              >
                <i className={`fa ${item.icon}`}></i>
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="bottom-toggle">
        <label className="switch">
          <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>
      <i className="fa-regular fa-envelope icon1"></i>
      {location.pathname === "/" && <Table />}
      <main className="content">{children}</main>
    </div>
  );
}

export default Home;