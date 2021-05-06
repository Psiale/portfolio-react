import React from "react";
import styles from "./Profile.module.css";
import ProfilePic from "../img/i-pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Label from "../components/Label";

const Profile = ({ handleOnClick, handleLabelOnClick, labelTitle, isMobile }) => (
  <div style={{color: isMobile ? '#08088d' :'#6b46c1' }} className={styles.mainContainer}>
    <div className={styles.labelContainer}>
      <Label handleOnClick={handleLabelOnClick} title={labelTitle} />
    </div>
    <img src={ProfilePic} alt="Alexis Sanchez" />
    <h2>Alexis Sanchez</h2>
    <p>Fullstack Developer</p>
    <p onClick={handleOnClick}>psialedev@gmail.com</p>
    <div className={styles.socialMediaContainer}>
      <a  style={{color: isMobile ? '#08088d' :'#6b46c1' }} href="https://www.linkedin.com/in/alexis-sanchez-dev/">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </a>
      <a  style={{color: isMobile ? '#08088d' :'#6b46c1' }} href="https://github.com/Psiale">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a  style={{color: isMobile ? '#08088d' :'#6b46c1' }} href="https://angel.co/u/alexis-sanchez-10">
        <FontAwesomeIcon icon={["fab", "angellist"]} />
      </a>
    </div>
  </div>
);

export default Profile;
