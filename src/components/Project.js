import React from 'react';
import styles from './Project.module.css';
import Animista, { AnimistaTypes } from "react-animista";

const Project = ({ light, title, desktopImg, mobileImg, details, technologies, urls}) => {
    return (
      <>
        <p style={{textAlign: urls.isMobile ? 'center' : 'initial'}}>{ title }</p>
          <div style={{flexDirection: urls.isMobile ? 'row' : 'column',justifyContent: urls.isMobile ? 'center' : 'center' }} className={styles.imagesContainer}>
            <Animista style={{backgroundColor: urls.isMobile ? 'rgba(0, 3, 27, 0.8)' : 'rgba(22, 0, 20, 0.8)' }} type={AnimistaTypes.SCALE_UP_CENTER} className={styles.showOnHover}><p>{details}</p></Animista>
           {(urls.isMobile) ? <img
           style={{
              maxWidth: '200px', 
              minWidth: 'unset',
              maxHeight: '427px',
              minHeight: 'unset',
              width: '50%',
              height: '100%'}} src={desktopImg} alt="desktop project"/> : <img className={styles.desktopImg} src={desktopImg} alt="desktop project"/> } {(mobileImg !== undefined) ? <img className={styles.mobileImg} src={mobileImg} alt=" mobile project"/> : null}
            <ul style={{flexDirection: urls.isMobile ? 'column' : 'row', alignItems:  urls.isMobile ? 'flex-start' : 'center', position: urls.isMobile ? 'initial' : 'absolute', bottom: '24px' }} className={styles.technologiesContainer}>
            {technologies.map(technology => (<> <li>{technology.title}</li> </>))}
          </ul>
        </div>
        <div className={styles.callToActionContainer}>
          {(urls.demo) ? <a className={light ? styles.coolLink : styles.coolLinkWeb} href={urls.demo}>TRY ME </a> : null }
          <a className={urls.isMobile ? (light ? styles.coolLink : styles.coolLinkMobile ) : light ? styles.coolLink : styles.coolLinkWeb } href={urls.repository}> REPOSITORY</a>
        </div>
      </>
    );
};

export default Project;