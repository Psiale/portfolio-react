import React from "react";
import Label from "../components/Label";
import styles from "./Projects.module.css";

const Projects = () => (
  <div className={styles.mainContainer}>
    <div className={styles.labelContainer}>
      <Label handleOnClick={() => console.log('should display list of web projects')} title="web" />
      <Label handleOnClick={() => console.log('should display list of mobile projects')} title="mobile" />
    </div>
    <p>Hello from projects</p>
  </div>
);

export default Projects;
