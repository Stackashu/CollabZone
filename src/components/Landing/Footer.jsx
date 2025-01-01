import React, { useState } from "react";
import style from "../../styles/Landing/Footer.module.css";
import "../../App.css";
import contactarrow from "../../assests/images/contactarrow.png";
import xfooter from "../../assests/images/xfooter.png";
import fbfooter from "../../assests/images/fbfooter.png";
import igfooter from "../../assests/images/igfooter.png";
import linkedinfooter from "../../assests/images/linkedinfooter.png";

function Footer() {
  const [email, setEmail] = useState('');

  const handleform = (e) => {
    e.preventDefault();
    }

  return (
    <div className={`${style.box}`}>
      <div className={`${style.up}`}>
        <div className={`${style.left}`}>
          <h1>CollabZone</h1>
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
              onChange={(e)=>setEmail(e.target.value)} 
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