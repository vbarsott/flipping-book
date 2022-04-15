import React, { useState } from 'react';
import PaperSheets from './PaperSheets';
import NextPageBtn from './NextPageBtn';
import PrevPageBtn from './PrevPageBtn';

const Book = () => {
  const [paperSheets, setPaperSheets] = useState([
    {
      id: '1',
      flipped: false,
      zIndex: 3,
      frontPageContent: {
        title: 'Flipping Book',
        text: 'Front Cover',
        cssClass: 'front-cover',
      },
      backPageContent: {
        title: 'Page 1',
        text: 'Content here',
        cssClass: 'back-content',
      },
    },
    {
      id: '2',
      flipped: false,
      zIndex: 2,
      frontPageContent: {
        title: 'Page 2',
        text: 'Content here',
        cssClass: 'front-content',
      },
      backPageContent: {
        title: 'Page 3',
        text: 'Content here',
        cssClass: 'back-content',
      },
    },
    {
      id: '3',
      flipped: false,
      zIndex: 1,
      frontPageContent: {
        title: 'Page 4',
        text: 'Content here',
        cssClass: 'front-content',
      },
      backPageContent: {
        title: 'Back Cover',
        text: 'The End',
        cssClass: 'back-cover',
      },
    },
  ]);
  const [isClosed, setIsClosed] = useState(true);
  const [isAtBeginning, setIsAtBegninning] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(0);

  const openBook = () => {
    setIsClosed(false);
  };

  const closeBook = (isAtBeginning) => {
    setIsClosed(true);
    setIsAtBegninning(isAtBeginning);
  };

  const goToPrevPage = () => {
    if (currentLocation > 0) {
      if (currentLocation === 1) {
        closeBook(true);
      }

      if (currentLocation === paperSheets.length) {
        openBook();
      }

      const previousBookPage = paperSheets[currentLocation - 1];

      setPaperSheets(
        paperSheets.map((paperSheet, index) => {
          return {
            ...paperSheet,
            flipped:
            paperSheet.id === previousBookPage.id ? false : paperSheet.flipped,
            zIndex:
            paperSheet.id === previousBookPage.id
                ? paperSheets.length - index
                : paperSheet.zIndex,
          };
        })
      );

      setCurrentLocation(currentLocation - 1);
    }
  };

  const goToNextPage = () => {
    if (currentLocation < paperSheets.length) {
      if (currentLocation === 0) {
        openBook();
      }

      if (currentLocation === paperSheets.length - 1) {
        closeBook(false);
      }

      const currentBookPage = paperSheets[currentLocation];

      setPaperSheets(
        paperSheets.map((paperSheet, index) => {
          return {
            ...paperSheet,
            flipped:
            paperSheet.id === currentBookPage.id ? true : paperSheet.flipped,
            zIndex:
            paperSheet.id === currentBookPage.id ? index : paperSheet.zIndex,
          };
        })
      );

      setCurrentLocation(currentLocation + 1);
    }
  };

  const bookStyle = isClosed
    ? isAtBeginning
      ? { transform: 'translateX(0%)' }
      : { transform: 'translateX(100%)' }
    : { transform: 'translateX(50%)' };

  return (
    <>
      <PrevPageBtn goToPrevPage={goToPrevPage} isClosed={isClosed} />

      <div className='book' style={bookStyle}>
        {paperSheets.map((paperSheet) => (
          <PaperSheets
            key={paperSheet.id}
            flipped={paperSheet.flipped}
            zIndex={paperSheet.zIndex}
            frontPageContent={paperSheet.frontPageContent}
            backPageContent={paperSheet.backPageContent}
          />
        ))}
      </div>

      <NextPageBtn goToNextPage={goToNextPage} isClosed={isClosed} />
    </>
  );
};

export default Book;
