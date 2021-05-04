import React from 'react';
import styles from './Home.module.css';
import Profile from './Profile';
import Projects from './Projects';

const Home = () => (
    
  <div className={styles.mainContainer}>
    <Profile />
    <Projects />
  </div>

);

export default Home;