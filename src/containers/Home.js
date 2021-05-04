import React from 'react';
import styles from './Home.module.css';
import Profile from './Profile';
import Projects from './Projects';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import projects from '../constants';

library.add(fab);

const Home = () => (
    
  <div className={styles.mainContainer}>
    <Profile />
    <Projects projects={projects} />
  </div>

);

export default Home;