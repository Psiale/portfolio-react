import React, { useState } from "react";
import Label from "../components/Label";
import styles from "./Projects.module.css";
import Project from '../components/Project';

const Projects = ({projects}) => {
  const [currProjects, setCurrProjects] = useState(projects.web);

  const handleOnClick = () => {
    (currProjects === projects.web) ? setCurrProjects(projects.mobile) : setCurrProjects(projects.web)
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.labelContainer}>
        <Label handleOnClick={handleOnClick} title="web" />
        <Label handleOnClick={handleOnClick} title="mobile" />
      </div>
      {currProjects.map(project => (
        <div className={styles.projectMainContainer}>
          <Project
            title={project.title} 
            desktopImg={project.images.desktop} 
            mobileImg={project.images.mobile} 
            technologies={project.technologies} 
            urls={project.urls}  />
        </div>
      ))}
    </div>
  );
} 

export default Projects;
