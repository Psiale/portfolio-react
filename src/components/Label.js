import React from 'react';

const Label = ({ title, handleOnClick }) =>(
    <>
      <button style={{transform: 'rotate(90deg)', marginBottom: '40px'}} onClick={handleOnClick}>{title}</button>
    </>
  );

export default Label;