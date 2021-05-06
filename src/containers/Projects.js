import React from "react";
import styles from "./Projects.module.css";
import Project from '../components/Project';

const Projects = ({ projects}) => {
  return (
    <div className={styles.mainContainer}>
      {projects.map(project => (
        <div style={{
          backgroundColor: project.urls.isMobile ? (project.light ? '#2795ED' : '#08088d' ) : project.light ? '#d6bcfa' : '#6b46c1'
        }} className={styles.projectMainContainer}>
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
