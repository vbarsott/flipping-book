import React from 'react';
import PageContent from './PageContent';

const PaperSheets = ({ flipped, zIndex, frontPageContent, backPageContent }) => {
  const paperSheetZIndex = { zIndex: zIndex };

  return (
    <>
      <div
        className={`paperSheets ${flipped ? 'flipped' : ''}`}
        style={paperSheetZIndex}>
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

export default PaperSheets;
