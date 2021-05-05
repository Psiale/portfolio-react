import React from 'react';
import styles from './Project.module.css';

const Project = ({title, desktopImg, mobileImg, details, technologies, urls}) => {
    return (
      <>
        <p>{ title }</p>
        <div className={styles.projectContainer}>
          <div className={styles.imagesContainer}>
            <img className={styles.desktopImg} src={desktopImg} alt="desktop project"/><img className={styles.mobileImg} src={mobileImg} alt=" mobile project"/>
          </div>
          <div className={styles.technologiesContainer}>
            {technologies.map(technology => (<> <p>{technology.title}</p> </>))}
          </div>
        </div>
        <div className={styles.callToActionContainer}>
          <a href={urls.demo}>TRY ME</a><a href={urls.repository}> REPOSITORY</a>
        </div>
      </>
    );
};

export default Project;