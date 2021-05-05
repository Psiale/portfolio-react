import React from "react";
import styles from "./Projects.module.css";
import Project from '../components/Project';

const Projects = ({ projects}) => {
  return (
    <div className={styles.mainContainer}>
      {projects.map(project => (
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
