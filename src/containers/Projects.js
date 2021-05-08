import React from "react";
import styles from "./Projects.module.css";
import Project from '../components/Project';

const Projects = ({ projects}) => {
  return (
    <div className={styles.mainContainer}>
      {projects.map(project => (
        <div style={{
          color: project.urls.isMobile ? (project.light ? '#040448' : 'white' ) : project.light ? '#44337a' : 'white'
          ,backgroundColor: project.urls.isMobile ? (project.light ? '#616cff' : '#0e20bbl' ) : project.light ? '#d6bcfa' : '#9F7AEA'
        }} className={styles.projectMainContainer}>
          <Project
            light={project.light ? true : false}
            title={project.title}
            details={project.details}
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
