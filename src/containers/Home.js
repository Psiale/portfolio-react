import React from 'react';
import styles from './Home.module.css';
import Profile from './Profile';
import Projects from './Projects';
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(far);

const Home = () => (
    
  <div className={styles.mainContainer}>
    <Profile />
    <Projects />
  </div>

);

export default Home;