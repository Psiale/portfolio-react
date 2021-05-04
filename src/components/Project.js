import React from 'react';
import styles from './Project.module.css';

const Project = ({title, desktopImg, mobileImg, details, technologies, urls}) => {
    return (
      <>
        <p>{ title }</p>
        <div className={styles.projectContainer}>
          <div className={styles.imagesContainer}>
            <img src={desktopImg} alt="desktop project"/><img src={mobileImg} alt=" mobile project"/>
          </div>
          <div className={styles.technologiesContainer}>
            {technologies.map(technologie => (<> <p>{technologie.title}</p> </>))}
          </div>
        </div>
        <div className={styles.callToActionContainer}>
          <a href={urls.demo}>TRY ME</a><a href={urls.repository}> REPOSITORY</a>
        </div>
      </>
    );
};

export default Project;