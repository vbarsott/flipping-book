import React from 'react';
import { MdNextPlan } from 'react-icons/md';

const NextPageBtn = ({ goToNextPage, isClosed }) => {
  const nextBtnStyle = isClosed
    ? { transform: 'translateX(0)' }
    : {
        transform: 'translateX(20vw)',
        transition: 'transform 0.5s',
      };

  return (
    <>
      <MdNextPlan
        className='text-light display-4'
        style={nextBtnStyle}
        role='button'
        aria-label='Next page'
        title='Next page'
        onClick={goToNextPage}
      />
    </>
  );
};

export default NextPageBtn;
