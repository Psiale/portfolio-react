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
  const [labelTitle, setLabelTitle] = useState('mobile');

  const handleLabelOnClick = () => {
    if (currProjects === projects.web) {
      setCurrProjects(projects.mobile)
      setLabelTitle('web');
    } else {
      setCurrProjects(projects.web)
      setLabelTitle('mobile')
    }
  }
  return (
    
    <div className={styles.mainContainer}>
      <Profile handleLabelOnClick={handleLabelOnClick} labelTitle={labelTitle} />
      <Projects projects={currProjects} />
    </div>
  
  );
}

export default Home;