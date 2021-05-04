import React from 'react';
import styles from './Profile.module.css'
import ProfilePic from '../img/i-pic.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = ({handleOnClick}) => (

  <div className={styles.mainContainer}>
   <div className={styles.profileMainContainer}>
     <img src={ProfilePic} alt="Alexis Sanchez"/>
     <div className={styles.profileInfoContainer}>
       <p>Alexis Sanchez</p>
       <p>Fullstack Developer</p>
       <p onClick={handleOnClick}>psialedev@gmail.com</p>
     </div>
   </div>
   <div>
    <a href="https://www.linkedin.com/in/alexis-sanchez-dev/">
    <FontAwesomeIcon icon={['fab', 'linkedin']} />
    </a>
    <a href="https://github.com/Psiale">
      <FontAwesomeIcon icon={['fab', 'github']} /></a>
    <a href="https://angel.co/u/alexis-sanchez-10">
     <FontAwesomeIcon icon={['fab', 'angellist']} />
    </a></div>
  </div>      
);


export default Profile;