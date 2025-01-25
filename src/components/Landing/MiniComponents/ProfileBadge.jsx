import React from "react";
import Human from "../../../assests/images/human.png";
import style from "../../../styles/Landing/MiniComponents/ProfileBadge.module.css";
import "../../../App.css";
import Badgepic from "../../../assests/images/badgepic.png";

const ProfileBadge = ({ pic, headline }) => {
  return (
    <span className={`${style.box}`}>
      {/* badge logo */}
      <img loading="lazy" className={`${style.pic}`} src={pic} alt="pic" />
      {/* badge note */}
      <h4>{headline}</h4>

      {/* arrow down */}
      <div className={`${style.downarrow}`}></div>
      {/* men profile pic */}
      <img className={`${style.profile}`} src={Badgepic} alt="badgepic" />
    </span>
  );
};
 
export default ProfileBadge;
