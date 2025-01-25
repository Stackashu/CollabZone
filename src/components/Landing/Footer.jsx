import React, { useState, useRef } from "react";
import style from "../../styles/Landing/Footer.module.css";
import "../../App.css";
import contactarrow from "../../assests/images/contactarrow.png";
import xfooter from "../../assests/images/xfooter.png";
import fbfooter from "../../assests/images/fbfooter.png";
import igfooter from "../../assests/images/igfooter.png";
import linkedinfooter from "../../assests/images/linkedinfooter.png";

function Footer() {
  const [email, setEmail] = useState("");

  const [tray1, setTray1] = useState(false);
  const [tray2, setTray2] = useState(false);
  const [tray3, setTray3] = useState(false);
  const [tray4, setTray4] = useState(false);

  const firsttray = useRef(null);
  const secondtray = useRef(null);
  const thirdtray = useRef(null);
  const fourthtray = useRef(null);

  const handleform = (e) => {
    e.preventDefault();
  };

  const handleCheck1=()=>{
    setTray1((prev) => !prev)
    setTray2(false)
    setTray3(false)
    setTray4(false)
  }
  const handleCheck2=()=>{
    setTray2((prev) => !prev)
    setTray1(false)
    setTray3(false)
    setTray4(false)
  }
  const handleCheck3=()=>{
    setTray3((prev) => !prev)
    setTray1(false)
    setTray2(false)
  }
  const handleCheck4=()=>{
    setTray4((prev) => !prev)
    setTray1(false)
    setTray2(false)
    setTray3(false)
  }

  return (

    <div className={`${style.box}`}>
      <div className={`${style.up}`}>
        <div className={`${style.left}`}>
          <h1>CollabZone</h1>
          <div className={`${style.miniPoints}`}>
            <div>
              <ul  className={`${  tray1 ? style.notesopen :style.notes}`}>
                <div ref={firsttray} onClick={handleCheck1} className={`${style.openertray}`}>
                  <h2>Information</h2>
                  <span className={`${style.downarrow}`}></span>
                </div>

                <li>Mobile App</li>
                <li>Investers</li>
                <li>Members</li>
                <li>Contact for webinars</li>
                <li>Be Our Member</li>
              </ul>

              <ul className={`${ tray2 ? style.notesopen :style.notes}`}>
                <div ref={secondtray} onClick={handleCheck2} className={`${style.openertray}`}>
                  <h2> Help For You</h2>
                  <span className={`${style.downarrow}`}></span>
                </div>

                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Manage Your Account</li>
              </ul>

              <ul className={`${ tray3 ? style.notesopen :style.notes}`}>
                <div ref={thirdtray} onClick={handleCheck3} className={`${style.openertray}`}>
                  <h2> Social Media </h2>
                  <span className={`${style.downarrow}`}></span>
                </div>

                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>

              <ul className={`${ tray4 ? style.notesopen :style.notes}`}>
                <div ref={fourthtray} onClick={handleCheck4} className={`${style.openertray}`}>
                  <h2> Tools & Services </h2>
                  <span className={`${style.downarrow}`}></span>
                </div>

                <li>Our products</li>
                <li>About Tools</li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${style.right}`}>
          <h3>Newsletter</h3>
          <h4>
            Stay updated with the latest features and tips! Subscribe to our
            newsletter.
          </h4>
          <form onSubmit={handleform} className={`${style.formm}`}>
            <input
              className={`${style.inputt}`}
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={`${style.buttonn}`}>
              Subscribe
              <img src={contactarrow} alt={contactarrow} />
            </button>
          </form>
        </div>
      </div>

      <div className={`${style.down}`}>
        <h3> 2024 | www.collabzone.com | All rights reserved</h3>
        <div>
          <img src={linkedinfooter} alt={linkedinfooter} />
          <img src={fbfooter} alt={fbfooter} />
          <img src={xfooter} alt={xfooter} />
          <img src={igfooter} alt={igfooter} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
