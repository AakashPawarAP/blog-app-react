import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Avatar } from "antd";
// import Avatar from "antd/lib/avatar/avatar";
// import "./App.css";
import Avatar from "@mui/material/Avatar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const navLinks = [
  {
    title: "Home",
    path: "./",
  },
  {
    title: "Bollywood",
    path: "./bollywood",
  },
  {
    title: "Hollwood",
    path: "./hollywood",
  },
  {
    title: "Technology",
    path: "./technology",
  },
  {
    title: "Fitness",
    path: "./fitness",
  },
  {
    title: "Food",
    path: "./food",
  },
  {
    title: "Login/Signup",
    path: "./login-signup",
  },
];
export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="site-navigation">
      <span className="menu-title">The Siren</span>
      <div className="menu-content-container">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </span>
        {/* <i
          className="MenuOpenIcon"
          onClick={() => setMenuActive(!menuActive)}
        /> */}
        <MenuOpenIcon onClick={() => setMenuActive(!menuActive)} />
      </div>
    </nav>
  );
}
