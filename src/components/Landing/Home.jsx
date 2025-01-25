import React, { useState } from "react";
import "../../App.css";
import style from "../../styles/Landing/Home.module.css";
import ProfileBadge from "./MiniComponents/ProfileBadge";
import Human from "../../assests/images/human.png";
import Root from "../../assests/images/root.png";
import Controlpanel from "../../assests/images/controlpanel.png";
const Home = () => {
  const [email, setEmail] = useState("");
  const heading1 = "Real-Time Collaboration"
  const heading2 = "Anylatics Dashboard"
  const heading3 = "Tracking the progress of project"
  const handleSubmit = (e) => {
    e.preventDefault(); 
  }; 
  
  return ( 
    <div className={`${style.outerbox}`}>
      <div className={`${style.innerbox}`}>
               <div className={`${style.smallEclipse}`}></div>
               <div className={`${style.largEclipse}`}></div>
            <div className={`${style.hero}`}>
              <h1> 
                Find Your Perfect Startup <span>Partner</span> Today!
              </h1>
              <h3>
                Connect with like-minded entrepreneurs and manage your projects
                seamlessly.
               </h3>
    
              <form onSubmit={handleSubmit} className={`${style.form}`}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit">Get Started</button>
              </form>
            </div>
      </div>
      <div className={`${style.badge1}`}> <ProfileBadge pic={Human} headline={heading1}  /></div>
      <div className={`${style.badge2}`}> <ProfileBadge pic={Controlpanel} headline={heading2}/></div>
      <div className={`${style.badge3}`}> <ProfileBadge pic={Root} headline={heading3}/></div>
    </div>
  );
};

export default Home;