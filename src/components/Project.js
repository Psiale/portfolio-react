import React from 'react';
import styles from './Project.module.css';

const Project = ({title, desktopImg, mobileImg, details, technologies, urls}) => {
    return (
      <>
        <p style={{textAlign: urls.isMobile ? 'center' : 'initial'}}>{ title }</p>
          <div style={{flexDirection: urls.isMobile ? 'row' : 'column', justifyContent: urls.isMobile ? 'center' : 'center' }} className={styles.imagesContainer}>
           {(urls.isMobile) ? <img
           style={{
              maxWidth: '200px', 
              minWidth: 'unset',
              maxHeight: '427px',
              minHeight: 'unset',
              width: '50%',
              height: '100%'}} src={desktopImg} alt="desktop project"/> : <img className={styles.desktopImg} src={desktopImg} alt="desktop project"/> } {(mobileImg !== undefined) ? <img className={styles.mobileImg} src={mobileImg} alt=" mobile project"/> : null}
            <ul style={{flexDirection: urls.isMobile ? 'column' : 'row', alignItems:  urls.isMobile ? 'flex-start' : 'center' }} className={styles.technologiesContainer}>
            {technologies.map(technology => (<> <li>{technology.title}</li> </>))}
          </ul>
        </div>
        <div className={styles.callToActionContainer}>
          {(urls.demo) ? <a href={urls.demo}>TRY ME </a> : null }
          <a href={urls.repository}> REPOSITORY</a>
        </div>
      </>
    );
};

export default Project;