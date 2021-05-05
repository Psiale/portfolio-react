import React from "react";
import styles from "./Profile.module.css";
import ProfilePic from "../img/i-pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Label from "../components/Label";

const Profile = ({ handleOnClick, handleLabelOnClick, labelTitle }) => (
  <div className={styles.mainContainer}>
    <div className={styles.labelContainer}>
      <Label handleOnClick={handleLabelOnClick} title={labelTitle} />
    </div>
    <img src={ProfilePic} alt="Alexis Sanchez" />
    <h2>Alexis Sanchez</h2>
    <p>Fullstack Developer</p>
    <p onClick={handleOnClick}>psialedev@gmail.com</p>
    <div className={styles.socialMediaContainer}>
      <a href="https://www.linkedin.com/in/alexis-sanchez-dev/">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </a>
      <a href="https://github.com/Psiale">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a href="https://angel.co/u/alexis-sanchez-10">
        <FontAwesomeIcon icon={["fab", "angellist"]} />
      </a>
    </div>
  </div>
);

export default Profile;
