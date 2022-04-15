import React from 'react';

const PageContent = ({ title, text, cssClass }) => {
  return (
    <>
      <div className={`gap-4 ${cssClass}`}>
        <h1 className='fontStyled fs-1 text-center'>{title}</h1>
        <h2 className='fontStyled fs-2 text-center'>{text}</h2>
      </div>
    </>
  );
};

export default PageContent;
