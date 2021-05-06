import React from 'react';
import styles from './Label.module.css'

const Label = ({ title, handleOnClick }) =>(
    <>
    {(title === 'Mobile') ? <button className={styles.buttonWeb} onClick={handleOnClick}>{title}</button> : <button className={styles.buttonMobile} onClick={handleOnClick}>{title}</button>}
    </>
  );

export default Label;