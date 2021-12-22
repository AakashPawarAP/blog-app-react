// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import { Avatar } from "antd";
// // import Avatar from "antd/lib/avatar/avatar";
// // import "./App.css";
// import Avatar from "@mui/material/Avatar";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// import { HiMenu, HiOutlineX } from "react-icons/hi";

// const navLinks = [
//   {
//     title: "Home",
//     path: "./",
//   },
//   {
//     title: "Bollywood",
//     path: "./bollywood",
//   },
//   {
//     title: "Hollwood",
//     path: "./hollywood",
//   },
//   {
//     title: "Technology",
//     path: "./technology",
//   },
//   {
//     title: "Fitness",
//     path: "./fitness",
//   },
//   {
//     title: "Food",
//     path: "./food",
//   },
//   {
//     title: "Login/Signup",
//     path: "./login-signup",
//   },
// ];

// export default function Navigation() {
//   const [menuActive, setMenuActive] = useState(false);
//   return (
//     <nav className="site-navigation">
//       <span className="menu-title">
//         <h3>The</h3>
//         <h1>Siren</h1>
//         {/* </span>
//       <div className="menu-content-container"> */}
//       </span>
//       <ul className={menuActive ? "nav-links-responsive" : "nav-links"}>
//         {navLinks.map((link, index) => (
//           <li key={index}>
//             <Link to={link.path}>{link.title}</Link>
//           </li>
//         ))}
//       </ul>
//       {/* <span>
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       </span> */}

//       <div className="menu-btn" onClick={() => setMenuActive(!menuActive)}>
//         {menuActive ? <HiOutlineX /> : <HiMenu />}
//       </div>
//     </nav>
//   );
// }

// import { useState } from "react";
// import "../assets/SCSS/navigation.css";
// import { HiMenu, HiOutlineX } from "react-icons/hi";
// import { NavLink } from "react-router-dom";

// const Navigation = () => {
//   const [showNavLinks, setShowNavLinks] = useState(false);
//   let navlinks = [
//     { catagory: "Home", to: "" },
//     { catagory: "Bollywood", to: "bollywood" },
//     { catagory: "Technology", to: "technology" },
//     { catagory: "Hollywod", to: "hollywood" },
//     { catagory: "Fitness", to: "fitness" },
//     { catagory: "Food", to: "food" },
//     {},
//   ];

//   return (
//     <div className="navbar-container">
//       <div className="logo">
//         <h4>The</h4>
//         <h1>Siren</h1>
//       </div>
//       <ul className={showNavLinks ? "nav-links-mobile" : "nav-links"}>
//         {navlinks.map((item, index) => {
//           return (
//             <li>
//               <NavLink
//                 key={index}
//                 to={`/${item.to}`}
//                 activeClassName="active"
//                 exact
//               >
//                 {item.catagory}
//               </NavLink>
//             </li>
//           );
//         })}
//         <NavLink to="/register">
//           <li className="button">Login/Signup</li>
//         </NavLink>
//       </ul>
//       <div className="menu-btn" onClick={() => setShowNavLinks(!showNavLinks)}>
//         {showNavLinks ? <HiOutlineX /> : <HiMenu />}
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { Avatar } from "antd";
// import Avatar from "antd/lib/avatar/avatar";
// import "./App.css";
import Avatar from "@mui/material/Avatar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  const navlinks = [
    { catagory: "Home", to: "" },
    { catagory: "Bollywood", to: "bollywood" },
    { catagory: "Technology", to: "technology" },
    { catagory: "Hollywod", to: "hollywood" },
    { catagory: "Fitness", to: "fitness" },
    { catagory: "Food", to: "food" },
    {},
  ];

  return (
    <nav className="site-navigation">
      <span className="menu-title">
        <h3>The</h3>
        <h1>Siren</h1>
        {/* </span>
       <div className="menu-content-container"> */}
      </span>
      <ul className={menuActive ? "nav-links-responsive" : "nav-links"}>
        {navlinks.map((item, index) => {
          return (
            <li>
              <NavLink
                key={index}
                to={`/${item.to}`}
                activeClassName="active"
                exact
              >
                {item.catagory}
              </NavLink>
            </li>
          );
        })}
        <NavLink to="/register">
          <li className="button">Login/Signup</li>
        </NavLink>
      </ul>
      {/* <span>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
       </span> */}
      <div className="menu-btn" onClick={() => setMenuActive(!menuActive)}>
        {menuActive ? <HiOutlineX /> : <HiMenu />}
      </div>
      <hr />
    </nav>
  );
};

export default Navigation;
