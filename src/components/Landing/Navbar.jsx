import React, { useState } from "react";
import style from "../../styles/Landing/Navbar.module.css";
import logo from '../../assests/images/CollabLogo.png'
import { NavLink  } from "react-router-dom";

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    

    const navs = ["Home", "Features", "How It Works", "Testimonials", "FAQs"];

  return (
    <header className={`${style.header}`}>

        <div className={`${style.lefthead}`}>
            <img className={`${style.logo}`} src={logo} alt="CollabZone logo"/>
            <h1><span>C</span>ollab<span>Z</span>one</h1>
        </div>

      <nav>
        <ul  className={`${style.navbar} `}>
        {navs.map((nav, index) => (
        <li
          key={index}
          className={`${style.navbar} ${activeIndex === index ? "changecolor" : ""}`}
          onClick={() => setActiveIndex(index)} // Set active index on click
        >
          {nav}
        </li>
      ))}
        </ul>
        </nav>

      <div className={`${style.righthead}`}>
         <NavLink className={`${style.link1}`} to="#">
            Get Started for FREE
         </NavLink>
         <NavLink className={`${style.link2}`} to="#">
            Log in
         </NavLink>
      </div>

    </header>
  );
};

export default Navbar;
