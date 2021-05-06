import React, { useState } from 'react';
import styles from './Home.module.css';
import Profile from './Profile';
import Projects from './Projects';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import projects from '../constants';

library.add(fab);

const Home = () => {
  const [currProjects, setCurrProjects] = useState(projects.web);
  const [labelTitle, setLabelTitle] = useState('Mobile');
  const [mobile, setMobile] = useState(false)

  const handleLabelOnClick = () => {
    if (currProjects === projects.web) {
      setCurrProjects(projects.mobile)
      setLabelTitle('Web');
      setMobile(true)
    } else {
      setCurrProjects(projects.web)
      setLabelTitle('Mobile')
      setMobile(false)
    }
  }
  return (
    
    <div className={styles.mainContainer}>
      <Profile handleLabelOnClick={handleLabelOnClick} labelTitle={labelTitle} isMobile={mobile} />
      <Projects projects={currProjects} isMobile={mobile} />
    </div>
  
  );
}

export default Home;