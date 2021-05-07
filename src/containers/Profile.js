import React from "react";
import styles from "./Profile.module.css";
import ProfilePic from "../img/i-pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "react-switch";

const Profile = ({ handleOnClick, handleLabelOnClick, labelTitle, isMobile }) => (
  <div style={{color: isMobile ? '#08088d' :'#6b46c1' }} className={styles.mainContainer}>
    <div className={styles.labelContainer}>
    </div>
    <img src={ProfilePic} alt="Alexis Sanchez" />
    <h2>Alexis Sanchez</h2>
    <p className={styles.role}>Fullstack Developer</p>
    <p className={styles.email} onClick={handleOnClick}>psialedev@gmail.com</p>
    <div className={styles.socialMediaContainer}>
      <a  style={{height: '0', color: isMobile ? '#08088d' :'#6b46c1' }} href="https://www.linkedin.com/in/alexis-sanchez-dev/">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </a>
      <a  style={{height: '0', color: isMobile ? '#08088d' :'#6b46c1' }} href="https://github.com/Psiale">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a  style={{height: '0', color: isMobile ? '#08088d' :'#6b46c1' }} href="https://angel.co/u/alexis-sanchez-10">
        <FontAwesomeIcon icon={["fab", "angellist"]} />
      </a>
    </div>
    <label style={{marginBottom: '15px', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <Switch
          onChange={handleLabelOnClick}
          offColor="#44337a" 
          onColor="#040448"
          offHandleColor="#d6bcfa"
          onHandleColor="#616cff"
          activeBoxShadow="0 0 2px 3px #4a5568"
          checked={isMobile}
          uncheckedIcon={false}
          checkedIcon={false} />
        <span>{labelTitle}</span>
      </label>
  </div>
);

export default Profile;
