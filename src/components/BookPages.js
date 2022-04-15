import React from 'react';
import PageContent from './PageContent';

const BookPages = ({ flipped, zIndex, frontPageContent, backPageContent }) => {
  const bookPageZIndex = { zIndex: zIndex };

  return (
    <>
      <div
        className={`bookPages ${flipped ? 'flipped' : ''}`}
        style={bookPageZIndex}>
        <div className='front'>
          <PageContent
            title={frontPageContent.title}
            text={frontPageContent.text}
            cssClass={frontPageContent.cssClass}
          />
        </div>

        <div className='back'>
          <PageContent
            title={backPageContent.title}
            text={backPageContent.text}
            cssClass={backPageContent.cssClass}
          />
        </div>
      </div>
    </>
  );
};

export default BookPages;
