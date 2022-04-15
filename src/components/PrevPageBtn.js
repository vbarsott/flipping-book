import React from 'react';
import { MdNextPlan } from 'react-icons/md';

const PrevPageBtn = ({ goToPrevPage, isClosed }) => {
  const prevBtnStyle = isClosed
    ? { transform: 'translateX(0) rotate(180deg)' }
    : {
        transform: 'translateX(-20vw) rotate(180deg)',
        transition: 'transform 0.5s',
      };

  return (
    <>
      <MdNextPlan
        className='text-light display-4'
        style={prevBtnStyle}
        role='button'
        aria-label='Previous page'
        title='Previous page'
        onClick={goToPrevPage}
      />
    </>
  );
};

export default PrevPageBtn;
